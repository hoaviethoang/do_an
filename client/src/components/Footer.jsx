import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components"
import { mobile } from "../reponsive";

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection:"column"})}
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;
const Logo =styled.h1`

`;
const Desc =styled.p`
    margin: 20px 0px;
`;
const SocialContainer =styled.div`
    display: flex;
`;
const SocialIcon =styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;
const Center = styled.div`
     flex: 1;
     padding: 20px;
     ${mobile({display:"none"})}
`;
const Title = styled.h3`
    margin-bottom: 30px;
`;
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;
const Right = styled.div`
     flex: 1;
     padding: 20px;
     ${mobile({backgroundColor:"#fff8f8"})}
`;
const ContactItem = styled.div`
     margin-bottom: 20px;
     display: flex;
     align-items: center;
`;
const Payment = styled.img`
     width: 50%;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>LAMA.</Logo>
            <Desc>
            Tất cả các sản phẩm tại Bounty Sneakers 100% là hàng chính hãng nhập ngoại từ cửa hàng Adidas, Nike chính thống các nước Anh, Mỹ, Nhật với chất lượng được kiểm duyệt. Đầy đủ tem, tag và phụ kiện.
Mẫu mã mới và đa dạng, luôn luôn mang đến các sản phẩm mới nhất và hot nhất đến người tiêu dùng: Adidas NMD, Ultra Boost, AlphaBounce, Nike Air Max, Nike Air Force 1…
Nhiều lựa chọn thú vị với các mức giá ưu đãi. Ship ngay trong nội thành Hà Nội, giao hàng các tỉnh khác 2-5 ngày.
Chính sách bảo hành sản phẩm chính hãng 3 tháng, cam kết 100% chính hãng, fake đền x 10.
            </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight:"10px"}}/> 127 Van Cao,Lieu Giai,Ba Dinh
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"10px"}}/>0367194708
            </ContactItem>
            <ContactItem>
               <MailOutline style={{marginRight:"10px"}}/> contact@andyhoang2k@gmail.com
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

export default Footer
