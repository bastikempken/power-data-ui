import {
  IxApplication,
  IxApplicationHeader,
  IxContent,
  IxMenu,
  IxMenuItem,
} from "@siemens/ix-react";
import { Outlet } from "react-router";

export default () => {
  return (
    <IxApplication class="w-screen h-screen">
      <IxApplicationHeader name="My Application">
        <div className="placeholder-logo" slot="logo"></div>
      </IxApplicationHeader>
      <IxMenu>
        <IxMenuItem>Item 1</IxMenuItem>
        <IxMenuItem>Item 2</IxMenuItem>
      </IxMenu>

      <IxContent>
        <Outlet />
      </IxContent>
    </IxApplication>
  );
};
