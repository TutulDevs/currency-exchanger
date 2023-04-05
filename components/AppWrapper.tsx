import { useAppInitial } from "@/src/hooks/useAppInitial";

export const AppWrapper: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  useAppInitial();

  return <>{children}</>;
};
