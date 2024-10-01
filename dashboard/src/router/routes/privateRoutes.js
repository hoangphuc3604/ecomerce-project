import { adminRoute } from "./adminRoutes";
import { sellerRoute } from "./sellerRoutes";

export const privateRoute = [...adminRoute, ...sellerRoute];
