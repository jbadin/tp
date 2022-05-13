
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
} from "react-native";

const Scientist = (props) => {
    const { img } = props;
    const { title } = props;
    const { desc } = props;
    return (
        <View style={styles.secondContainer}>
            <View style={styles.fourthContainer}>
                <Image style={styles.img} source={{ uri: img }} />
            </View>
            <View style={styles.thirdContainer}>
                <Text style={styles.title}>{title}</Text>
                <ScrollView>
                    <Text style={styles.desc}>{desc}</Text>
                </ScrollView>
            </View>
        </View>
    );
};
export default Scientist;

const styles = StyleSheet.create({
    img: {
        width: 150,
        height: 150,
    },
    secondContainer: {
        flexDirection: "row",
        marginBottom: 10,
        alignItems: "center",
    },
    thirdContainer: {
        flexDirection: "column",
        flex: 2,
    },
    title: {
        fontSize: 20,
        marginBottom: 10,
    },
    fourthContainer: {
        flex: 2,
        alignItems: "center",
    },
});