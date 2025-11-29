import Link from "next/link";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
}: CTAButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold transition";
  const variantClasses =
    variant === "primary"
      ? "bg-sky-700 text-white hover:bg-sky-800"
      : "border-2 border-sky-700 text-sky-700 hover:bg-sky-50";

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </Link>
  );
}

