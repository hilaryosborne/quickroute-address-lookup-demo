declare let process: {
  env: {
    SERVER_PORT?: number;
    SERVER_LOG_LEVEL?: "error" | "warn" | "info" | "debug" | "log";
    PROVIDER_TOMTOM_API_KEY?: string;
    PROVIDER_TOMTOM_API_PROTOCOL?: string;
    PROVIDER_TOMTOM_API_HOST?: string;
    PROVIDER_TOMTOM_API_PORT?: number;
  };
  exit: (code: number) => void;
  stdin: {
    resume: () => void;
  };
  on: (event: string, callback: () => void) => void;
};
