import { LoaderIcon } from "lucide-react";
import { useThemeStore } from "../store/useThemeStore";

const PageLoader = () => {
  const { theme } = useThemeStore();
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      data-theme={theme}
    >
      <LoaderIcon className="animate-spin size-10 text-primary" />
      <p className="mt-4 text-base-content opacity-60 font-mono">
        Loading page...
      </p>
    </div>
  );
};
export default PageLoader;
