import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { useSession } from "next-auth/client";

export const DropDownMenu = () => {
  const [session] = useSession();
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState: any) => (
        <React.Fragment>
          <div style={{ marginLeft: -40 }}>
            <Button
              {...bindTrigger(popupState)}
              style={{ backgroundColor: "#f6fbff" }}
            >
              <img
                src={session?.user.image as any}
                alt=""
                style={{
                  borderRadius: 40,
                  height: 80,
                  width: 80,
                  marginTop: 15,
                }}
              />
            </Button>
          </div>
          <Menu {...bindMenu(popupState)} style={{ top: 72, left: -20 }}>
            <MenuItem onClick={popupState.close} style={{ fontSize: 15 }}>
              Settings
            </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
};
