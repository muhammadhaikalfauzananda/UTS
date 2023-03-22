import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FlashList } from '@shopify/flash-list';

export default function SecondScreen({ navigation }) {
    const DATA = [
        { name: '2% BHA Salicylic Acid Acne Treatment', key: '1', desc: 'Vegan New Generation Salicylic Acid with 4X Acne Combat to help reduce acne & comedones, as well as preventing the formation of new acne. Formulated with a gentler kind of Salicylic Acid to unclog pores, remove dead skin cells, & fight acne-causing bacteria; Hydrolyzed Algin & Zinc Sulfate to reduce excess sebum; & Poria Cocos that calms redness while also repairing the skin barrier. Comfortable to be used daily, non-sticky, suitable for oily & acne-prone skin.' },
        { name: 'AHA BHA PHA Peeling Solution', key: '2', desc: 'Get Rid of Blackheads & Clogged Pores for Good! Exfoliating serum with AHA 3% BHA 1% PHA 2% helps to remove dead skin cells, reduce clogged pores & comedones, while maintaining skin moisture level. ' },
        { name: 'DIAMOND PHYTO Stem Cell Serum', key: '3', desc: 'Vegan serum with Real Diamond & Swiss Alps Stem Cells or diamond serum to increase skin smoothness & radiance, accelerating skin renewal, while combat signs of premature aging such as wrinkles & large pores. This Somethinc serum is Equipped with 4-MSK Diamond Bright Molecule & Guaiazulene, which helps brighten, smoothens texture, evens out skin tone, & soothes redness. The latest Drone technology works effectively to bring the brightening active to work specifically on the target. Get firm, glowing & clear skin in 4 weeks* with this face serum for your daily skincare.' },
        { name: '60% Vita Propolis + Bee Venom Glow Serum', key: '6', desc: 'Bee Glow Essence Power combined with natural 60% Vita Propolis & Manuka Honey has long been the main key in treating acne, breakouts, also reducing excess sebum. Enriched with Bee Venom which has anti-bacterial & anti-inflammatory properties. This is a potent serum as it intensively nourishes skin, makes skin healthy & glowing as well as preventing premature aging.' },
        { name: 'Hylapore Away Solution', key: '7', desc: 'Get rid of large pores & reduce excess sebum/oil up to 30%* with the treatment from Vegan ingredients such as Cleome Gynandra Leaf Extract, Zinc PCA, Mastic Gum & Palmitoyl Tripeptide-38. It has been clinically tested to help tighten pores, reduce redness on skin & control excess sebum production so that pores on the entire face appear smaller.' },
        { name: 'RESURRECT Multibiome Serum', key: '8', desc: 'This neutralizer & balancer serum is a solution for those experiencing skin breakouts with Millions Microbiome Balancer in One Drop so as to prevent skin problems due to skin microbiota imbalance. This disorder usually occurs due to lifestyle such as the use of cleaning products, skin chafing with masks, clothes or shaving. When the skin microbiota is imbalance, the skin becomes intolerant or more sensitive and looks dull. It is packed with pre-, pro-, & post-biotic to maintain the balance of skin microbiota so that the skin is nourished, healthy & brighter.' },
        { name: 'Revive Potion 3% Arbutin + Bakuchiol', key: '9', desc: 'A serum infused with 3 Superstar Brightening Agent that produce Maximum Brightening Result, namely Alpha Arbutin, SabiWhite®, & Bakuchiol which are able to brighten & even out skin tone without side effects. It is enhanced with Bakuchiol which is able to protect skin from pollution and free radicals, fade hyperpigmentation and prevent premature aging.' },
        { name: 'Skin Defender Bakuchiol + COQ10 Serum', key: '10', desc: 'Powerful combination of Bakuchiol, CoQ10 & PALMITOYL TRIPEPTIDE-38 which are effective to help strengthen collagen tissue, prevent signs of premature aging, neutralize free radicals & protect skin damage caused by UV rays, pollution or external exposure. This serum complements the 3 important components that are essential for skin barrier (Squalane, Ceramide, Hyaluronic Acid) by hydrating and moisturizing skin as well as strengthening skin barrier.' },
        { name: 'Granactive Snow Retinoid 2%', key: '12', desc: 'Beginner-Friendly Soothing Retinol contains the most gentle & less-irritating retinol derivative, hence Granactive Retinoid is a Fungal-Acne Friendly serum that is suitable for sensitive skin. Granactive Retinoid is clinically proven to reduce wrinkles/fine lines, tighten & improve skin texture as well as preventing signs of premature aging. It is formulated with Snow Mushroom which provides a Cooling Effect on inflamed skin & Natural Alpha Bisabolol which acts as an antimicrobial that helps prevent hyperpigmentation. Use it at night, always use sunscreen in the morning.' },
        { name: 'Dark Spot Reducer Ampoule', key: '13', desc: 'PIH & PIE Targeted Treatment Ampoule that is formulated with a combination of the best ingredients & clinically tested active ingredients one of which is Tranexamoyl Dipeptide-23, functions as a double brightening effect without causing skin irritation. It is also able to even out skin tone, brighten up skin, reduce acne scars & dark spots.' },
        { name: '1% Pure Retinol + Squalane', key: '13', desc: '10x Advanced Retinol contains the purest version of Retinol known as the Gold Standard that helps prevent signs of premature aging. It is a potent & stable oil-based Retinol so it is not easily oxidized. Equipped with Squalane which is a Natural Moisturizing Factor (NMF) that maintains skin elasticity. Use it at night & always use sunscreen in the morning.' }
    ];

    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/bg2.png")}>
            <View style={{ marginTop: 60, height: 750, width: Dimensions.get("screen").width }}>
                <FlashList
                    data={DATA}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('Third', item)}>
                            <Text style={styles.item}>
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    )}
                    estimatedItemSize={200}
                />
            </View>

            <View style={styles.button}>
                <TouchableOpacity onPress={() => navigation.navigate('First')}>
                    <AntDesign name='leftcircle' size={50} color="white" />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: Dimensions.get("screen").width,
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    item: {
        flex: 1,
        marginTop: 20,
        width: 350,
        padding: 20,
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 20,
        fontSize: 24,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center"
    },
    button: {
        margin: 20,
        top: 0,
        right: 150,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
});