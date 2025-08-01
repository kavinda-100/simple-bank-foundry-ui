import {
  Wallet,
  ArrowUpDown,
  Shield,
  Zap,
  TrendingUp,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: <Wallet className="h-6 w-6" />,
    title: "Wallet Integration",
    desc: "Seamlessly connect your Ethereum wallet and manage your digital assets with industry-leading security protocols.",
  },
  {
    icon: <ArrowUpDown className="h-6 w-6" />,
    title: "Smart Transactions",
    desc: "Deposit, withdraw, and transfer funds instantly using Ethereum smart contracts with transparent, immutable records.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Secure Banking",
    desc: "Your funds are protected by blockchain technology and smart contract security, ensuring maximum protection.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Lightning Fast",
    desc: "Experience near-instantaneous transactions powered by Ethereum blockchain with real-time balance updates.",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "DeFi Lending",
    desc: "Access decentralized lending features with automated loan management and transparent interest calculations.",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Global Access",
    desc: "Bank from anywhere in the world with 24/7 access to your funds through the Ethereum network.",
  },
];
export default function Feature1() {
  return (
    <section className="relative bg-white py-14 dark:bg-black">
      {/* Background effects - theme aware */}
      <div className="absolute inset-0">
        {/* Radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-100/30 via-white/70 to-gray-50 blur-3xl dark:from-indigo-900/30 dark:via-black/70 dark:to-gray-950"></div>

        {/* Enhanced glow spots */}
        <div className="absolute top-20 -left-20 h-60 w-60 rounded-full bg-purple-200/20 blur-[100px] dark:bg-purple-600/20"></div>
        <div className="absolute -right-20 bottom-20 h-60 w-60 rounded-full bg-blue-200/20 blur-[100px] dark:bg-blue-600/20"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="relative mx-auto max-w-2xl sm:text-center">
          <div className="relative z-10">
            <h3 className="font-geist mt-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-3xl font-normal tracking-tighter text-transparent sm:text-4xl md:text-5xl dark:from-white/70 dark:via-white dark:to-slate-500/80">
              The Future of Digital Banking
            </h3>
            <p className="font-geist dark:text-foreground/60 mt-3 text-gray-600">
              Experience decentralized banking powered by Ethereum smart
              contracts. Secure, transparent, and accessible financial services
              for the digital age.
            </p>
          </div>
          <div
            className="absolute inset-0 mx-auto h-44 max-w-xs blur-[118px]"
            style={{
              background:
                "linear-gradient(152.92deg, rgba(192, 15, 102, 0.2) 4.54%, rgba(192, 11, 109, 0.26) 34.2%, rgba(192, 15, 102, 0.1) 77.55%)",
            }}
          ></div>
        </div>
        <hr className="dark:bg-foreground/30 mx-auto mt-5 h-px w-1/2 bg-gray-300" />
        <div className="relative mt-12">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <li
                key={idx}
                className="transform-gpu space-y-3 rounded-xl border border-gray-200 bg-white/50 p-4 [box-shadow:0_-20px_80px_-20px_#8b5cf640_inset] backdrop-blur-sm dark:border-gray-800 dark:bg-transparent dark:[box-shadow:0_-20px_80px_-20px_#ff7aa42f_inset]"
              >
                <div className="dark:text-primary w-fit transform-gpu rounded-full border border-purple-200 bg-purple-50 p-4 text-purple-600 [box-shadow:0_-20px_80px_-20px_#8b5cf650_inset] dark:border-gray-800 dark:bg-transparent dark:[box-shadow:0_-20px_80px_-20px_#ff7aa43f_inset]">
                  {item.icon}
                </div>
                <h4 className="font-geist text-lg font-bold tracking-tighter text-gray-900 dark:text-white">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
