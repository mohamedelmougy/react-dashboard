import { styled, useTheme } from "@mui/material/styles";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import MuiDrawer from "@mui/material/Drawer";
import { drawerWidth } from "../App";
import {
  fisrtSideBarIconGroup,
  secondSideBarIconGroup,
  thirdSideBarIconGroup,
} from "../Constants";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import { Link, useLocation } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const SideBar = ({ open, handleDrawerClose }) => {
  const theme = useTheme();
  const location = useLocation();

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>

      <Divider />

      <Box my={2}>
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/1.jpg"
          sx={[
            {
              mx: "auto",
              mb: 1,
              transition: "0.25s",
            },
            open ? { width: 100, height: 100 } : { width: 44, height: 44 },
          ]}
        />
        <Typography
          sx={{ transition: "0.25s" }}
          align="center"
          fontSize={open ? 17 : 0}
          variant="h2"
          color="inherit"
        >
          mohamed
        </Typography>
        <Typography
          sx={{ transition: "0.25s" }}
          align="center"
          fontSize={open ? 15 : 0}
          component="p"
          color={theme.palette.info.main}
          fontWeight="bold"
        >
          Admin
        </Typography>
      </Box>

      <Divider />

      <List sx={{ pt: 0, pb: 0 }}>
        {fisrtSideBarIconGroup.map((item) => (
          <Link
            key={item.text}
            to={item.route}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Tooltip title={open ? null : item.text} placement="right">
              <ListItem
                disablePadding
                sx={{
                  display: "block",
                  bgcolor:
                    location.pathname === item.route
                      ? theme.palette.activeLink.main
                      : null,
                }}
              >
                <ListItemButton
                  aria-label={item.label}
                  sx={[
                    {
                      minHeight: 48,
                      px: 2.5,
                    },
                    open
                      ? {
                          justifyContent: "initial",
                        }
                      : {
                          justifyContent: "center",
                        },
                  ]}
                >
                  <ListItemIcon
                    sx={[
                      {
                        minWidth: 0,
                        justifyContent: "center",
                      },
                      open
                        ? {
                            mr: 3,
                          }
                        : {
                            mr: "auto",
                          },
                    ]}
                  >
                    <item.icon />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    sx={[
                      open
                        ? {
                            opacity: 1,
                          }
                        : {
                            opacity: 0,
                          },
                    ]}
                  />
                </ListItemButton>
              </ListItem>
            </Tooltip>
          </Link>
        ))}
      </List>

      <Divider />

      <List sx={{ pt: 0, pb: 0 }}>
        {secondSideBarIconGroup.map((item) => (
          <Link
            key={item.text}
            to={item.route}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Tooltip title={open ? null : item.text} placement="right">
              <ListItem
                disablePadding
                sx={{
                  display: "block",
                  bgcolor:
                    location.pathname === item.route
                      ? theme.palette.activeLink.main
                      : null,
                }}
              >
                <ListItemButton
                  aria-label={item.label}
                  sx={[
                    {
                      minHeight: 48,
                      px: 2.5,
                    },
                    open
                      ? {
                          justifyContent: "initial",
                        }
                      : {
                          justifyContent: "center",
                        },
                  ]}
                >
                  <ListItemIcon
                    sx={[
                      {
                        minWidth: 0,
                        justifyContent: "center",
                      },
                      open
                        ? {
                            mr: 3,
                          }
                        : {
                            mr: "auto",
                          },
                    ]}
                  >
                    <item.icon />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    sx={[
                      open
                        ? {
                            opacity: 1,
                          }
                        : {
                            opacity: 0,
                          },
                    ]}
                  />
                </ListItemButton>
              </ListItem>
            </Tooltip>
          </Link>
        ))}
      </List>

      <Divider />

      <List sx={{ pt: 0, pb: 0 }}>
        {thirdSideBarIconGroup.map((item) => (
          <Link
            key={item.text}
            to={item.route}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Tooltip title={open ? null : item.text} placement="right">
              <ListItem
                disablePadding
                sx={{
                  display: "block",
                  bgcolor:
                    location.pathname === item.route
                      ? theme.palette.activeLink.main
                      : null,
                }}
              >
                <ListItemButton
                  aria-label={item.label}
                  sx={[
                    {
                      minHeight: 48,
                      px: 2.5,
                    },
                    open
                      ? {
                          justifyContent: "initial",
                        }
                      : {
                          justifyContent: "center",
                        },
                  ]}
                >
                  <ListItemIcon
                    sx={[
                      {
                        minWidth: 0,
                        justifyContent: "center",
                      },
                      open
                        ? {
                            mr: 3,
                          }
                        : {
                            mr: "auto",
                          },
                    ]}
                  >
                    <item.icon />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    sx={[
                      open
                        ? {
                            opacity: 1,
                          }
                        : {
                            opacity: 0,
                          },
                    ]}
                  />
                </ListItemButton>
              </ListItem>
            </Tooltip>
          </Link>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;
