"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion } from "framer-motion";
import { useAccount, useEnsAvatar, useEnsName } from "wagmi";
import {
  Wallet,
  DollarSign,
  Shield,
  Zap,
  ArrowRight,
  Copy,
  CheckCircle,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const formSchema = z.object({
  wallet_address: z
    .string()
    .min(42, "Wallet address must be 42 characters")
    .max(42, "Wallet address must be 42 characters")
    .regex(/^0x[a-fA-F0-9]{40}$/, "Invalid Ethereum wallet address format"),
  amount: z
    .string()
    .min(1, "Amount is required")
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 0.01, {
      message: "Amount must be at least 0.01 ETH",
    }),
});

type FormData = z.infer<typeof formSchema>;

const CreateAccountForm = () => {
  const { address } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { data: ensAvatar } = useEnsAvatar({ name: ensName! });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      wallet_address: address ?? "",
      amount: "",
    },
  });

  // run an effect to set the wallet address from the account if available
  React.useEffect(() => {
    if (address) {
      form.setValue("wallet_address", address);
    }
  }, [address, form]);

  async function onSubmit(values: FormData) {
    /// steps
    /// 1. send data to smart contract
    /// 2. handle response
    /// 3. if successful,
    ///    - save account data to the database (wallet_address, amount_deposit, tx_type, tx_hash, profile_url)
    ///    - show success message
    ///    - reset form
    /// 4. reset form
    ///
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Form values:", {
        ...values,
        amount: Number(values.amount), // Convert to number for processing
      });
      setIsSuccess(true);
      form.reset();
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 px-4 py-12 dark:from-gray-950 dark:via-black dark:to-purple-950">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 h-60 w-60 rounded-full bg-purple-200/30 blur-[100px] dark:bg-purple-600/20"></div>
        <div className="absolute -right-20 bottom-20 h-60 w-60 rounded-full bg-blue-200/30 blur-[100px] dark:bg-blue-600/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-100/20 via-transparent to-transparent dark:from-indigo-900/20"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-2xl"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-8 text-center">
          <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600">
            <Wallet className="h-8 w-8 text-white" />
          </div>
          <h1 className="mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-3xl font-bold text-transparent dark:from-white dark:to-gray-300">
            Create Your Bank Account
          </h1>
          <p className="mx-auto max-w-md text-gray-600 dark:text-gray-400">
            Join the future of decentralized banking. Create your secure account
            on the Ethereum blockchain.
          </p>
        </motion.div>

        {/* Success Message */}
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6"
          >
            <Card className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/20">
              <CardContent className="flex items-center gap-3 p-4">
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                <p className="font-medium text-green-800 dark:text-green-300">
                  Account created successfully! Welcome to Simple Bank.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Main Form Card */}
        <motion.div variants={itemVariants}>
          <Card className="border-gray-200/50 bg-white/80 shadow-xl backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-900/80">
            <CardHeader className="pb-4 text-center">
              <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                Account Details
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400">
                Enter your Ethereum wallet address and initial deposit amount
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  {/* Wallet Address Field */}
                  <FormField
                    control={form.control}
                    name="wallet_address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                          <Wallet className="h-4 w-4" />
                          Wallet Address
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              placeholder="0x742d35Cc6634C0532925a3b8D17d3c4f328C3e5"
                              className="h-12 border-gray-300 bg-white pr-12 pl-4 focus:border-purple-500 focus:ring-purple-500/20 dark:border-gray-600 dark:bg-gray-800"
                              {...field}
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="absolute top-1/2 right-2 h-8 w-8 -translate-y-1/2 p-0 hover:bg-gray-100 dark:hover:bg-gray-700"
                              onClick={() =>
                                navigator.clipboard
                                  .readText()
                                  .then(field.onChange)
                              }
                            >
                              <Copy className="h-4 w-4" />
                            </Button>
                          </div>
                        </FormControl>
                        <FormDescription className="text-xs text-gray-500 dark:text-gray-400">
                          Your Ethereum wallet address (starts with 0x)
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Amount Field */}
                  <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                          <DollarSign className="h-4 w-4" />
                          Initial Deposit Amount
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              type="number"
                              step="0.01"
                              min="0.01"
                              placeholder="2.5"
                              className="h-12 border-gray-300 bg-white pr-16 pl-4 focus:border-purple-500 focus:ring-purple-500/20 dark:border-gray-600 dark:bg-gray-800"
                              {...field}
                            />
                            <Label className="absolute top-1/2 right-4 -translate-y-1/2 text-sm font-medium text-gray-500 dark:text-gray-400">
                              ETH
                            </Label>
                          </div>
                        </FormControl>
                        <FormDescription className="text-xs text-gray-500 dark:text-gray-400">
                          Minimum deposit of 0.01 ETH required
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Security Features */}
                  <div className="grid grid-cols-1 gap-4 rounded-lg border border-purple-100 bg-gradient-to-r from-purple-50/50 to-blue-50/50 p-4 md:grid-cols-3 dark:border-purple-800 dark:from-purple-950/20 dark:to-blue-950/20">
                    <div className="flex items-center gap-2 text-sm">
                      <Shield className="h-4 w-4 text-green-600 dark:text-green-400" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Secure
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Zap className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Fast
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Verified
                      </span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="group h-12 w-full bg-gradient-to-r from-purple-600 to-blue-600 font-medium text-white shadow-lg shadow-purple-500/25 transition-all duration-200 hover:from-purple-700 hover:to-blue-700"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        Creating Account...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        Create Account
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>

            <CardFooter className="border-t border-gray-100 pt-4 text-center dark:border-gray-800">
              <p className="mx-auto text-xs text-gray-500 dark:text-gray-400">
                By creating an account, you agree to our Terms of Service and
                Privacy Policy. Your funds are secured by blockchain technology.
              </p>
            </CardFooter>
          </Card>
        </motion.div>

        {/* Additional Info */}
        <motion.div variants={itemVariants} className="mt-8 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Need help? Contact our{" "}
            <Button
              variant="link"
              className="h-auto p-0 text-purple-600 dark:text-purple-400"
            >
              support team
            </Button>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CreateAccountForm;
