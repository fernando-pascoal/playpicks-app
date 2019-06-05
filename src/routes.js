import React from "react";
import {
  createAppContainer,
  createBottomTabNavigator,
  createSwitchNavigator
} from "react-navigation";
import { colors } from "~/styles";

/**
 * LOGIN ROUTES
 */
import Login from "~/pages/Login";

/**
 * PUBLIC ROUTES
 */
import LastMatches from "~/pages/LastMatches";
import NewMatches from "~/pages/NewMatches";
import Questions from "~/pages/Questions";
import Plans from "~/pages/Plans";

const tabNavigator = createBottomTabNavigator(
  {
    LastMatches,
    NewMatches,
    Questions
  },
  {
    initialRouteName: "NewMatches",
    tabBarOptions: {
      activeTintColor: colors.white,
      inactiveTintColor: colors.whiteTransparent,
      showIcon: true,
      showLabel: false,
      style: {
        backgroundColor: colors.darkLight
      }
    }
  }
);

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Login,
      Plans,
      Dashboard: tabNavigator
    },
    {
      initialRouteName: "Dashboard"
    }
  )
);

export default Routes;
