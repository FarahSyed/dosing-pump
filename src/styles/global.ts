import { StyleSheet, TextStyle, ViewStyle, ImageStyle } from "react-native";

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

const _light = '#C60001';
const _medium = '#9e0202';
const _dark = '#5a0cb3';
const _secondary = "#d3d3d3";
const _themeLight = "#fccaca";
const _info = "#007ea7";
const _link = "#777777";
const _success = "#208b3a";
const _warning = "#ec7d10";
const _danger = "#fc2f00";
const _white = "#ffffff";
const _black = "#000000";
const _transparent = "rgba(0,0,0,.2)";

const styling: NamedStyles<any> & Record<string, any> = {
  textWhite: { color: _white },
  textPrimary: { color: _dark },
  textSecondary: { color: _secondary },
  textSuccess: { color: _success },
  textDanger: { color: _danger },
  textWarning: { color: _warning },
  textBlack: { color: _black },
  textInfo: { color: _info },
  textLight: { color: _light },
  textThemeLight: { color: _themeLight },
  textRight: { textAlign: "right" },
  textLeft: { textAlign: "left" },
  textCenter: { textAlign: "center" },
  textBold: { fontWeight: "bold" },

  bgWhite: { backgroundColor: _white },
  bgDark: { backgroundColor: _dark },
  bgSecondary: { backgroundColor: _secondary },
  bgSuccess: { backgroundColor: _success },
  bgDanger: { backgroundColor: _danger },
  bgWarning: { backgroundColor: _warning },
  bgBlack: { backgroundColor: _black },
  bgInfo: { backgroundColor: _info },
  bgLight: { backgroundColor: _light },
  bgThemeLight: { backgroundColor: _themeLight },
  bgTransparent: { backgroundColor: _transparent },

  borderWhite: { borderColor: _white },
  borderPrimary: { borderColor: _dark },
  borderSecondary: { borderColor: _secondary },
  borderSuccess: { borderColor: _success },
  borderDanger: { borderColor: _danger },
  borderWarning: { borderColor: _warning },
  borderBlack: { borderColor: _black },
  borderInfo: { borderColor: _info },
  borderLight: { borderColor: _light },

  inputBox: {
    width: '80%',
    padding: 8,
    marginVertical: 10,
    paddingLeft: 10,
    borderWidth: 1,
    flexDirection: 'row',
    fontSize: 16,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: 'grey',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '80%',
    marginTop: 16,
  },
  btn: {
    backgroundColor: _dark,
    // color: "white",
    // width: '100%',
    alignItems: 'center',
    marginVertical: 15,
    padding: 15,
    paddingHorizontal: 25,
    // fontSize: 16,
    borderRadius: 100,
    borderWidth: 0.1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  link: {
    color: _link,
    fontSize: 16,
    textAlign: 'right',
    fontStyle: 'italic',
  },
  roundedBtn: {
    backgroundColor: _dark,
    color: "#fff",
    height: 50,
    width: 50,
    padding: 12,
    fontSize: 16,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  error: {
    marginVertical: 15,
    fontSize: 12,
    color: _danger,
  },
  badge: {
    width: 25,
    height: 25,
    fontSize: 13,
    backgroundColor: "white",
    color: _dark,
    borderRadius: 15,
    padding: 3,
    fontWeight: "bold",
    textAlign: "center",
    position: "absolute",
    left: -10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },

  shadow1: {
    shadowColor: "rgba(0,0,0,.5)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  shadow2: {
    shadowColor: "rgba(0,0,0,.5)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  shadow3: {
    shadowColor: "rgba(0,0,0,.5)",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  shadow4: {
    shadowColor: "rgba(0,0,0,.5)",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
  },
  shadow5: {
    shadowColor: "rgba(0,0,0,.5)",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,

    elevation: 20,
  },
  shadow6: {
    shadowColor: "rgba(0,0,0,.5)",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  p1: {
    padding: 10,
  },
  p2: {
    padding: 20,
  },
  p3: {
    padding: 30,
  },
  p4: {
    padding: 40,
  },
  p5: {
    padding: 50,
  },
  py1: {
    paddingVertical: 10,
  },
  py2: {
    paddingVertical: 20,
  },
  py3: {
    paddingVertical: 30,
  },
  py4: {
    paddingVertical: 40,
  },
  py5: {
    paddingVertical: 50,
  },
  px1: {
    paddingHorizontal: 10,
  },
  px2: {
    paddingHorizontal: 20,
  },
  px3: {
    paddingHorizontal: 30,
  },
  px4: {
    paddingHorizontal: 40,
  },
  px5: {
    paddingHorizontal: 50,
  },
  pl1: {
    paddingLeft: 10,
  },
  pl2: {
    paddingLeft: 20,
  },
  pl3: {
    paddingLeft: 30,
  },
  pl4: {
    paddingLeft: 40,
  },
  pl5: {
    paddingLeft: 50,
  },
  pt1: {
    paddingTop: 10,
  },
  pt2: {
    paddingTop: 20,
  },
  pt3: {
    paddingTop: 30,
  },
  pt4: {
    paddingTop: 40,
  },
  pt5: {
    paddingTop: 50,
  },
  pe1: {
    paddingEnd: 10,
  },
  pe2: {
    paddingEnd: 20,
  },
  pe3: {
    paddingEnd: 30,
  },
  pe4: {
    paddingEnd: 40,
  },
  pe5: {
    paddingEnd: 50,
  },
  pb1: {
    paddingBottom: 10,
  },
  pb2: {
    paddingBottom: 20,
  },
  pb3: {
    paddingBottom: 30,
  },
  pb4: {
    paddingBottom: 40,
  },
  pb5: {
    paddingBottom: 50,
  },
  m1: {
    margin: 10,
  },
  m2: {
    margin: 20,
  },
  m3: {
    margin: 30,
  },
  m4: {
    margin: 40,
  },
  m5: {
    margin: 50,
  },
  my1: {
    marginVertical: 10,
  },
  my2: {
    marginVertical: 20,
  },
  my3: {
    marginVertical: 30,
  },
  my4: {
    marginVertical: 40,
  },
  my5: {
    marginVertical: 50,
  },
  mx1: {
    marginHorizontal: 10,
  },
  mx2: {
    marginHorizontal: 20,
  },
  mx3: {
    marginHorizontal: 30,
  },
  mx4: {
    marginHorizontal: 40,
  },
  mx5: {
    marginHorizontal: 50,
  },
  ml1: {
    marginLeft: 10,
  },
  ml2: {
    marginLeft: 20,
  },
  ml3: {
    marginLeft: 30,
  },
  ml4: {
    marginLeft: 40,
  },
  ml5: {
    marginLeft: 50,
  },
  me1: {
    marginEnd: 10,
  },
  me2: {
    marginEnd: 20,
  },
  me3: {
    marginEnd: 30,
  },
  me4: {
    marginEnd: 40,
  },
  me5: {
    marginEnd: 50,
  },
  mt1: {
    marginTop: 10,
  },
  mt2: {
    marginTop: 20,
  },
  mt3: {
    marginTop: 30,
  },
  mt4: {
    marginTop: 40,
  },
  mt5: {
    marginTop: 50,
  },
  mb1: {
    marginBottom: 10,
  },
  mb2: {
    marginBottom: 20,
  },
  mb3: {
    marginBottom: 30,
  },
  mb4: {
    marginBottom: 40,
  },
  mb5: {
    marginBottom: 50,
  },
  flexRow: {
    flexDirection: "row",
  },
  flexColumn: {
    flexDirection: "column",
  },
  flexCenter: {
    justifyContent: "center",
    alignItems: "center",
  },
  flexWrap: {
    flexWrap: "wrap",
  },
  flexNoWrap: {
    flexWrap: "nowrap",
  },
  justifyContentCenter: {
    justifyContent: "center",
  },
  justifyContentStart: {
    justifyContent: "flex-start",
  },
  justifyContentEnd: {
    justifyContent: "flex-end",
  },
  alignItemsCenter: {
    alignItems: "center",
  },
  alignItemsStart: {
    alignItems: "flex-start",
  },
  alignItemsEnd: {
    alignItems: "flex-end",
  },
  justifyContentBetween: {
    justifyContent: "space-between",
  },
  justifyContentAround: {
    justifyContent: "space-around",
  },
  rounded: {
    borderRadius: 15,
  },
  roundedPill: {
    borderRadius: 50,
  },
  label: {
    fontSize: 18,
    borderRadius: 5,
    paddingLeft: 10,
    color: _dark,
  },
  chip: {
    padding: 8,
    paddingHorizontal: 10,
    backgroundColor: _light,
    borderRadius: 30,
    margin: 5,
  },
  paper: {
    padding: 10,
    backgroundColor: _white,
    borderRadius: 10,
    margin: 2,
    shadowColor: "rgba(0,0,0,.5)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  positionRelative: {
    position: "relative",
  },
  positionAbsolute: {
    position: "absolute",
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16, // Optional: adds spacing from edges
    backgroundColor: '#fff', // Optional: set background
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  heading: {
    fontSize: 30,
  },
  fs: { fontSize: 16 },

  _light,
  _medium,
  _dark,
  _themeLight,
  _secondary,
  _info,
  _link,
  _success,
  _warning,
  _danger,
  _white,
  _black,
  _transparent,
};

const styles = StyleSheet.create(styling);

export default styles;
