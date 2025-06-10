export type TAppStage = "dev" | "qa" | "prod";
type TAppStages = { [key in TAppStage]: TAppStage };
export const AppStages: TAppStages = {
  dev: "dev",
  qa: "qa",
  prod: "prod",
};

// appStage
let envAppStage = import.meta.env.VITE_STAGE;
if (!envAppStage || !Object.keys(AppStages).includes(envAppStage)) {
  console.warn(`Invalid or missing VITE_STAGE env(${envAppStage}): using DEV`);
  envAppStage = AppStages.dev;
}

export const appStage: TAppStage = envAppStage as TAppStage;
export const appName = "DripStores";
export const baseUrl: string = import.meta.env.VITE_BASE_URL!;
export const debugMode = import.meta.env.VITE_NODE_ENV === "development";
export const apiUrl = {
  auth: import.meta.env.VITE_API_AUTH,
};

export const getAuthServiceUrl = (): string => {
  return apiUrl.auth;
};

export const debug = (message: string, vars: unknown = undefined): void => {
  if (debugMode) {
    if (vars) {
      console.log(message, vars);
    } else {
      console.log(message);
    }
  }
};
