import React from "react";
import {
  createAppContainer,
  createBottomTabNavigator,
  createSwitchNavigator
} from "react-navigation";
import { colors } from "~/src/styles";

/**
 * LOGIN ROUTES
 */
import Login from "~/src/pages/Login";

/**
 * PUBLIC ROUTES
 */
import LastMatches from "~/src/pages/LastMatches";
import NewMatches from "~/src/pages/NewMatches";
import Questions from "~/src/pages/Questions";
import Plans from "~/src/pages/Plans";

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
