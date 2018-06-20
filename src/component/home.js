import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    ListView,
    FlatList,
    TextInput,
    Image,
    TouchableOpacity,
    ScrollView,
    Picker, Dimensions
} from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/dist/SimpleLineIcons';

let width = Dimensions.get('window').width;
export default class home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSearch: false,
            keyword: '',
            data: []

        };
        this.arrItem = [
            {text: 'Tổng hợp'},
            {text: 'Kinh tế'},
            {text: 'Chính trị'},
            {text: 'Xã hội'},
            {text: 'Thế giới'},
            {text: 'Đời sống'},
            {text: 'Văn hóa'},
            {text: 'Công nghê'},
        ]
        iconSearch = require('../../img/iconsearch.png');
    }

    componentWillMount() {
        this.setState({
            data: [
                {
                    id: 1,
                    title: "Kinh ngạc với 20 màn cosplay đỉnh của đỉnh các nhân vật cực khó sao chép trong Star Wars",
                    image: "http://genknews.genkcdn.vn/zoom/310_200/2018/6/8/19-crop-1528427119264411358679.jpg",
                    content: "Hóa trang thành các nhân vật yêu thích là 1 chuyện hết sức phổ biến đối với người hâm mộ thương hiệu bom tấn “Chiến tranh giữa các vì sao” Star Wars."
                },
                {
                    id: 2,
                    title: "Game khủng long ARK: Survival Evolved Mobile sẽ được phát hành ngay tháng 6 này",
                    image: "http://genknews.genkcdn.vn/zoom/310_200/2018/6/11/download-1528686757538315260981.jpg",
                    content: "ARK: Survival Evolved Mobile sẽ mở cửa trên di động vào ngày 14 tháng 6 tới đây, cho cả iOS lẫn Android."
                },
                {
                    id: 3,
                    title: "Những thánh nhân ghi nhiều bàn thắng nhất lịch sử vòng chung kết World Cup (P1)",
                    image: "http://genknews.genkcdn.vn/zoom/310_200/2018/6/11/photo-1-15286830827561164716000.jpg",
                    content: "Cùng chúng tôi lật lại lịch sử và đi tìm 10 thánh nhân đã ghi nhiều bàn thắng nhất tại đấu trường World Cup."
                },
                {
                    title: "LMHT: Nhờ nội tại hồi chiêu siêu nhanh, giờ đây đấu sĩ cũng có thể dùng Lưỡi Hái Linh Hồn chứ không chỉ riêng xạ thủ",
                    image: "http://genknews.genkcdn.vn/zoom/310_200/2018/6/11/maxresdefault-15286842963471510832086.jpg",
                    content: "Đợt làm lại của Lưỡi Hái Linh Hồn giúp cho trang bị này được lột xác hoàn toàn và chẳng khác gì một món đồ mới lần đầu tiên xuất hiện."
                },
                {
                    id: 4,
                    title: "[E3 2018] Just Cause 4 sẽ đặt bối cảnh tại Nam Mỹ",
                    image: "http://genknews.genkcdn.vn/zoom/310_200/2018/6/11/4-1528677253861815530816.jpg",
                    content: "Đoạn giới thiệu, như người hâm mộ đã mong đợi, đem lại sự phấn khích tuyệt đối với nhân vật chính Rico Rodriguez"
                },
                {
                    id: 5,
                    title: "[E3 2018] Dying Light 2 lộ diện, Dũng CT và Team Đụt chuẩn bị tinh thần ăn hành chưa?",
                    image: "http://genknews.genkcdn.vn/zoom/310_200/2018/6/11/4-15286768112781541269747.jpg",
                    content: "Dying Light 2 đem đến một hệ thống parkour trơn tru trong một thế giới đang trải qua một thời đại hiện đại tối tăm..."
                },
                {
                    id: 6,
                    title: "[E3 2018] Không thể tin nổi, lần đầu tiên xuất hiện một thế giới đa chiều, nơi có cả Naruto, Dragon Ball, One Piece và Death Note",
                    image: "http://genknews.genkcdn.vn/zoom/310_200/2018/6/11/1-15286752132271556774732.jpg",
                    content: "Điều khiến trò chơi này trở nên đặc biệt là nó mang đến và kết hợp giữa bốn thương hiệu manga / anime cực kỳ..."
                },
                {
                    id: 7,
                    title: "[E3 2018] Cyberpunk 2077 - Thế giới sẽ trở nên đen tối ra sao khi công nghệ vượt qua tầm kiểm soát của con người?",
                    image: "http://genknews.genkcdn.vn/zoom/310_200/2018/6/11/1-15286745512641671869056.jpg",
                    content: "Trò chơi được đặt trong một tương lai đen tối của năm 2077, nơi công nghệ tiên tiến đã trở thành sự cứu rỗi và."
                },
                {
                    id: 8,
                    title: "[E3 2018] Thấy buổi họp báo của Microsoft quá to, Bethesda mượn luôn sân khấu để quảng cáo cho Fallout 76",
                    image: "http://genknews.genkcdn.vn/zoom/310_200/2018/6/11/photo-1-15286739466781969792074.jpg",
                    content: "Trong buổi họp báo của Microsoft tại E3 diễn ra vào rạng sáng nay, Todd Howard của Bethesda đã xuất hiện dưới..."
                },
                {
                    id: 9,
                    title: "[E3 2018] Hóa ra chúng ta đã nhầm to, Shadows Die Twice không phải Bloodborne 2 mà là một tựa game hoàn toàn mới",
                    image: "http://genknews.genkcdn.vn/zoom/310_200/2018/6/11/1-15286737604831538272951.jpg",
                    content: "Sekiro: Shadows Die Twice là một tựa game hoàn toàn mới tới từ From Software chứ không phải Bloodborne 2..."
                },
                {
                    id: 10,
                    title: "[E3 2018] Sau nhiều năm rời xa ánh hào quang, dòng game Halo chính thức trở lại ấn tượng với tên gọi Halo: Infinite",
                    image: "http://genknews.genkcdn.vn/zoom/310_200/2018/6/11/1-1528673394262965701199.jpg",
                    content: "Dòng game độc quyền đình đám của hệ máy Xbox chính thức đánh dấu sự trở lại cực kỳ ấn tượng trong năm..."
                },
                {
                    id: 11,
                    title: "Liên Quân Mobile: 3 lý do khiến Rourke không xứng đáng với 1 viên Đá Quý",
                    image: "http://genknews.genkcdn.vn/zoom/310_200/2018/6/10/29-15286481298362030569686.jpg",
                    content: "Đá Quý là item có giá trị nhất trong Liên Quân Mobile, nó được sử dụng để đổi các vật phẩm trong Shop Đá Quý."
                },
                {
                    id: 12,
                    title: "Từ giờ tới cuối năm, MSI giới thiệu thêm rất nhiều đồ khủng cho game thủ",
                    image: "http://genknews.genkcdn.vn/zoom/310_200/2018/6/10/img0172-15286367060841785834468.jpg",
                    content: "Như thường lệ thì trong Computex 2018 này, hãng phần cứng quen thuộc với game thủ Việt là MSI đã giới thiệu..."
                },
                {
                    id: 13,
                    title: "Không chỉ Hàn Quốc, đến lượt tuyển thủ Châu Âu cũng phải dừng sự nghiệp LMHT, đi NVQS",
                    image: "http://genknews.genkcdn.vn/zoom/310_200/2018/6/10/photo-0-1528638327719119588461.jpg",
                    content: "Xạ thủ số một Châu Âu năm nào chuẩn bị chia tay LMHT, đi nghĩa vụ quân sự?"
                },
                {
                    id: 14,
                    title: "Liên Quân Mobile: Trung Quốc là đại diện Wildcard thứ 3 dự Chung kết thế giới",
                    image: "http://genknews.genkcdn.vn/zoom/310_200/2018/6/10/1-15286349643041016016249.jpg",
                    content: "Giải Chung kết thế giới đầu tiên của Liên Quân Mobile là Arena of Valor World Cup (AWC 2018) sẽ được tổ chức vào tháng 7 tại Los Angeles, Mỹ."
                },
                {
                    id: 15,
                    title: "G.Skill phá kỷ lục tốc độ với RAM DDR4-5066MHz, vượt qua rất nhiều giới hạn",
                    image: "http://genknews.genkcdn.vn/zoom/310_200/2018/6/10/photo-2-15286214575451296668963.jpg",
                    content: "G.Skill giới thiệu bộ nhớ RAM DDR4 có tốc độ cao nhất trên thế giới hiện nay tại Computex 2018."
                },
                {
                    id: 16,
                    title: "10 nhân vật có khả năng sẽ xuất hiện trong Avengers 4 (Phần 2)",
                    image: "http://genknews.genkcdn.vn/zoom/310_200/2018/6/4/ronin-2-152810596138059356571.jpg",
                    content: "Dù vẫn chưa rõ sống chết nhưng Phil Coulson, Valkyrie cùng 1 số siêu anh hùng khác có thể sẽ góp mặt trong..."
                },
                {
                    id: 17,
                    title: "Góc thẳng thắn: Chơi game online mà sợ bị PK thì về nhà mà chơi… đồ hàng đi!",
                    image: "http://genknews.genkcdn.vn/zoom/220_160/2018/6/9/2-crop-15285558916561598340132.jpg",
                    content: "Một trong những dòng chia sẻ rất thật của các game thủ Làng Lá Phiêu Lưu Ký."
                },
                {
                    id: 18,
                    title: "Vì sao một đội hình Pokemon chỉ giới hạn có 6 thành viên?",
                    image: "http://genknews.genkcdn.vn/zoom/310_200/2018/6/10/cde08f568c23b4231c52a0097235e0b4-15286317586631291446421.jpg",
                    content: "Không phải ngẫu nhiên mà đội hình Pokemon chỉ nằm gói gọn trong con số 6, tất cả đều có lý do của nó."
                },
            ]
        })
    }

    componentDidMount() {
        this.products = this.state.data;
    }

    renderToolBar() {
        let isSearch = this.state.isSearch;
        if (!isSearch) {
            return (
                <View style={styles.toolBar}>
                    <Ionicons name="ios-list-box-outline" style={[styles.icon]}/>
                    <Text style={styles.texttoolBar}>Việt Nam Plus</Text>
                    <TouchableOpacity onPress={() => this.setState({isSearch: true})}>
                        <Image style={styles.icontoolBar} source={iconSearch}/>
                    </TouchableOpacity>
                </View>
            );
        }
        else {
            return (
                <View style={styles.toolBar}>
                    <SimpleLineIcons name="list" style={[styles.icon]}/>
                    <TextInput
                        style={styles.formInput}
                        placeholder={'Search.....'}
                        placeholderTextColor={'#fff'}
                        onChangeText={(keyword) => this.keywordChange(keyword)}
                        value={this.state.keyword}
                    />
                    <TouchableOpacity onPress={() => this.setState({isSearch: true})}>
                        <Image style={styles.icontoolBar} source={iconSearch}/>
                    </TouchableOpacity>
                </View>
            );
        }
    }

    keywordChange(keyword) {
        let data = null;
        data = this.products;
        const newData = data.filter(function (item) {
            const itemData = item.title.toUpperCase();
            const textData = keyword.toUpperCase();
            return itemData.indexOf(textData) > -1
        })
        this.setState({
            data: newData,
            keyword: keyword
        })
    }
    gotoDetail(){
        this.props.navigation.navigate('CartView');
    }

//    renderList(data){
//     return(
//         <View style={styles.containerList}>
//             <Image source={{uri:data.image}} style={styles.image}/>
//             <View style={styles.waperContainer}>
//                 <Text style={styles.title}>{data.title}</Text>
//                 <Text style={styles.content}>{data.content}</Text>
//             </View>
//         </View>
//     );
//    }


    render() {
        return (
            <View style={styles.container}>
                <View style={{backgroundColor: '#dedede'}}>
                    {
                        this.renderToolBar()
                    }
                </View>
                <View>
                    <ScrollView
                        horizontal={true}
                    >
                        {this.arrItem.map((e, i) => {
                            return (
                                <View key={i}
                                      style={{backgroundColor: '#8B0000', height: 20, paddingHorizontal: 10}}>
                                    <Text style={{color: '#fff'}}>{e.text}</Text>
                                </View>
                            )
                        })}
                    </ScrollView>
                </View>
                <View style={{flex: 1}}>
                    <FlatList
                        data={this.state.data}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item, index}) =>
                            this.itemList(item, index)
                        }
                    />
                </View>
            </View>
        );
    }

    itemList(product, index) {
        return (
            <TouchableOpacity onPress={()=> {this.gotoDetail()}}>
                <View
                    style={styles.containerList}>
                    <Image source={{uri: product.image}} style={styles.image}/>
                    <View style={styles.waperContainer}>
                        <Text style={styles.title}>{product.title}</Text>
                        <Text style={styles.content}>{product.content}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAEBD7'
    },
    toolBar: {
        height: 50,
        backgroundColor: '#8B0000',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 5
    },
    icontoolBar: {
        width: 35,
        height: 35,
        resizeMode: 'contain',
    },
    picker: {
        width: 70,
        color: 'white',
        fontSize: 16
    },
    texttoolBar: {
        color: 'white',
        fontSize: 16
    },
    formInput: {
        flex: 1,
        fontSize: 16,
        color: 'white'
    },
    containerList: {
        flexDirection: 'row',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        margin: 5
    },
    title: {
        color: 'red',
        fontSize: 16,
        marginTop: 15
    },
    content: {
        fontSize: 14,
        color: 'black'
    },
    waperContainer: {
        flex: 1,

    },
    item: {
        backgroundColor: '#fff',
        marginTop: 2,
        marginHorizontal: 10,
        paddingHorizontal: 5,
        paddingBottom: 10,
        borderColor: '#dedede',
        borderWidth: 1,
        borderRadius: 5
    },
    icon: {
        fontSize: 28, width: 30, color: '#fff', textAlign: 'center'
    },
});