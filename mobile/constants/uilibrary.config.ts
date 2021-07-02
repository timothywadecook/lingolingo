import {
  Colors,
  Typography,
  Spacings,
  ThemeManager,
} from "react-native-ui-lib";

//
// Foundation Config
//

Colors.loadColors({
  primaryColor: "#2364AA",
  secondaryColor: "#81C3D7",
  confirmColor: "#23aa69",
  textColor: "#050505",
  errorColor: "#E63B2E",
  successColor: "#ADC76F",
  warnColor: "##FF963C",
});

Typography.loadTypographies({
  heading: { fontSize: 36, fontWeight: "600", color: Colors.textColor },
  subheading: { fontSize: 28, fontWeight: "500" },
  body: { fontSize: 18, fontWeight: "400" },
  subtext: { fontSize: 14, fontWeight: "400" },
});

Spacings.loadSpacings({
  page: 20,
  card: 12,
  gridGutter: 16,
});

//
// Components Config
//

// with plain object
ThemeManager.setComponentTheme("Card", {
  borderRadius: 8,
});

// with a dynamic function
ThemeManager.setComponentTheme("Button", (props, context) => {
  // 'square' is not an original Button prop, but a custom prop that can
  // be used to create different variations of buttons in your app
  if (props.square) {
    return {
      borderRadius: 0,
      backgroundColor: Colors.errorColor,
    };
  }

  return {
    backgroundColor: Colors.errorColor,
  };
});
