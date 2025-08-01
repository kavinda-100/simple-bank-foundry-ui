CREATE TYPE "public"."tx_type" AS ENUM('create_account', 'deposit', 'withdrawal', 'transfer', 'borrow', 'repayment');--> statement-breakpoint
CREATE TABLE "loans" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid,
	"borrower" text NOT NULL,
	"amount" numeric(20, 2) DEFAULT '0.00' NOT NULL,
	"borrowed_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"due_date" date NOT NULL,
	"tx_hash" text NOT NULL,
	"tx_type" "tx_type" NOT NULL,
	"is_paid" boolean DEFAULT false NOT NULL,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE "transactions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid,
	"from" text NOT NULL,
	"to" text,
	"amount" numeric(20, 2) DEFAULT '0.00' NOT NULL,
	"tx_type" "tx_type" NOT NULL,
	"tx_hash" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE "users_bank_account" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"wallet_address" text NOT NULL,
	"amount_deposited" numeric(20, 2) DEFAULT '0.00' NOT NULL,
	"tx_type" "tx_type" DEFAULT 'create_account' NOT NULL,
	"tx_hash" text NOT NULL,
	"profile_url" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone,
	CONSTRAINT "users_bank_account_wallet_address_unique" UNIQUE("wallet_address")
);
--> statement-breakpoint
ALTER TABLE "loans" ADD CONSTRAINT "loans_user_id_users_bank_account_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users_bank_account"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_user_id_users_bank_account_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users_bank_account"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "loans_borrower_idx" ON "loans" USING btree ("borrower");--> statement-breakpoint
CREATE UNIQUE INDEX "from_idx" ON "transactions" USING btree ("from");--> statement-breakpoint
CREATE UNIQUE INDEX "users_bank_account_wallet_address_idx" ON "users_bank_account" USING btree ("wallet_address");