import Link from "next/link";
import { FC } from "react";

type CardProps = React.ComponentPropsWithRef<typeof Link>;

export const Card: FC<CardProps> = ({ children, ...props }) => {
  return (
    <Link
      className="group block p-4 border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors"
      {...props}
    >
      {children}
    </Link>
  );
};

type CardTitleProps = React.ComponentPropsWithRef<"h3">;

export const CardTitle: FC<CardTitleProps> = ({ children, ...props }) => {
  return (
    <h3 className="text-lg font-bold" {...props}>
      {children}
    </h3>
  );
};

// desc

type CardDescriptionProps = React.ComponentPropsWithRef<"p">;

export const CardDescription: FC<CardDescriptionProps> = ({
  children,
  ...props
}) => {
  return (
    <p className="text-sm text-gray-400 group-hover:text-gray-100" {...props}>
      {children}
    </p>
  );
};
