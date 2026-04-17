import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  app: {
    organizationId: "ozRs8p6ZW",
    entry: "./src/App.tsx",
  },
  deployment: {
    appId: "qt4co70vgb44jmfzzqhmcjk2",
  },
});
