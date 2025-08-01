import { sql, relations } from "drizzle-orm";
import { pgEnum, pgTable } from "drizzle-orm/pg-core";
import * as d from "drizzle-orm/pg-core";
import { de } from "zod/v4/locales";

// columns helpers
const timestamps = {
  createdAt: d
    .timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: d
    .timestamp("updated_at", { withTimezone: true })
    .$onUpdate(() => new Date()),
};
// Primary keys definition
const primaryKeys = {
  id: d.uuid("id").primaryKey().defaultRandom(),
};
// Enum for transaction types
export const tx_type = pgEnum("tx_type", [
  "create_account",
  "deposit",
  "withdrawal",
  "transfer",
  "borrow",
  "repayment",
]);

// users_bank_account table schema
export const usersBankAccount = pgTable(
  "users_bank_account",
  {
    ...primaryKeys,
    walletAddress: d.text("wallet_address").notNull().unique(),
    amountDeposited: d
      .numeric("amount_deposited", { precision: 20, scale: 2 })
      .notNull()
      .default("0.00"),
    txType: tx_type("tx_type").notNull().default("create_account"),
    txHash: d.text("tx_hash").notNull(),
    profileUrl: d.text("profile_url").notNull(),
    ...timestamps,
  },
  (table) => [
    d
      .uniqueIndex("users_bank_account_wallet_address_idx")
      .on(table.walletAddress),
  ],
);

// transactions table schema
// `from` is the sender's wallet address, `to` is the recipient's wallet address
export const transactions = pgTable(
  "transactions",
  {
    ...primaryKeys,
    userId: d.uuid("user_id").references(() => usersBankAccount.id, {
      onDelete: "cascade",
    }),
    from: d.text("from").notNull(),
    to: d.text("to"), // Nullable for transactions that don't have a recipient like deposits and withdrawals
    amount: d
      .numeric("amount", { precision: 20, scale: 2 })
      .notNull()
      .default("0.00"),
    txType: tx_type("tx_type").notNull(),
    txHash: d.text("tx_hash").notNull(),
    description: d.text("description"),
    ...timestamps,
  },
  (table) => [d.uniqueIndex("from_idx").on(table.from)],
);

// loans table schema
// `borrower` is the wallet address of the person borrowing
// `amount` is the total amount borrowed
export const loans = pgTable(
  "loans",
  {
    ...primaryKeys,
    userId: d.uuid("user_id").references(() => usersBankAccount.id, {
      onDelete: "cascade",
    }),
    borrower: d.text("borrower").notNull(),
    amount: d
      .numeric("amount", { precision: 20, scale: 2 })
      .notNull()
      .default("0.00"),
    borrowedAt: d
      .timestamp("borrowed_at", { withTimezone: true })
      .notNull()
      .default(sql`CURRENT_TIMESTAMP`),
    dueDate: d.date("due_date").notNull(),
    txHash: d.text("tx_hash").notNull(),
    txType: tx_type("tx_type").notNull(),
    isLoanPaidBack: d.boolean("is_paid").notNull().default(false),
    description: d.text("description"),
    ...timestamps,
  },
  (table) => [d.uniqueIndex("loans_borrower_idx").on(table.borrower)],
);

// relationships

// users_bank_account to transactions (one-to-many)
export const transactionsRelation = relations(transactions, ({ one }) => ({
  user: one(usersBankAccount, {
    fields: [transactions.userId],
    references: [usersBankAccount.id],
  }),
}));
export const usersBankAccountRelationWithTransactions = relations(
  usersBankAccount,
  ({ many }) => ({
    transactions: many(transactions),
  }),
);

// users_bank_account to loans (one-to-many)
export const loansRelation = relations(loans, ({ one }) => ({
  user: one(usersBankAccount, {
    fields: [loans.userId],
    references: [usersBankAccount.id],
  }),
}));
export const usersBankAccountRelationWithLoans = relations(
  usersBankAccount,
  ({ many }) => ({
    loans: many(loans),
  }),
);
