import { s } from "./Header.style";
import { Image, Text } from "react-native";
import LogoImg from "../../assets/logo.png";
export function Header() {
  return (
    <>
      <Image style={s.img} source={LogoImg} />
      <Text style={s.subtitle}>You probubly have some thing to do</Text>
    </>
  );
}
