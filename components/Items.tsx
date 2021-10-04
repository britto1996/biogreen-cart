import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'
import { Avatar, Button, ListItem } from 'react-native-elements';
import  Icon  from 'react-native-vector-icons/Ionicons';



const data = [
    {
        "productsList": [
            {
                "productVariant": [
                    {
                        "name": "capacity:200ml",
                         "id":1,
                        "assets": {
                            "images": [
                                {
                                    "src": "https://s3.amazonaws.com/biogreenmart.apiplatform.io/assets/images/products/compostable_cups/biogreen-biodegradable-compostable-water-glass-200ml.png"
                                },
                                
                            ],
                           
                        },
                        "sku": "CCP-200",
                        "displayName": "Capacity:200ml",
                        "product": [
                            {
                                "name": "compostable_cups",
                                "description": [
                                    {
                                        "language": "en",
                                        "value": "Biogreen™ Biodegradable Cups Bagasse is remoulded to a kind of paper that is used to make plates, cups and glasses. Recyclable, lightweight, and other physical attributes of disposable cups will continue to make them the foremost choice of packaging food products. Disposable cups are designed to hold both, hot and cold, substances, which further propels their applicability in global food & beverage industry. However, a majority of disposable cups are made from plastic materials to reduce chances of food contamination. This raises concerns regarding impact of such plastic cups on the environment, whether in terms of rising production or from dumping waste plastic disposable cups. \n Salient features our products \n • Cheap Easy to use \n • Easy to dispose \n • Hygienic \n • Easily available \n • Made from GMO-Free, Annually Renewable Natural Resources. \n • 100% Compostable and Biodegradable \n • Food grade \n • Low Carbon and Low Energy Foot Print. \n • Do NOT Contain Polypropylene or Polystyrene."
                                    }
                                ],
                                "category": 4,
                                "variants": {
                                    "count": 4,
                                    "attributes": [
                                        {
                                            "name": "capacity",
                                            "displayType": "dropdown",
                                            "values": [
                                                "200ml",
                                                "250ml",
                                                "300ml",
                                                "360ml"
                                            ]
                                        }
                                    ]
                                },
                                "displayName": "Compostable Cups",
                                "id": 8
                            }
                        ]
                    }
                ],
                "quantity": 100
            }
        ],
        "id": 8,
        "country": "India",
        "state": "Tamil Nadu",
        "description": [
            {
                "language": "en",
                "value": "200ml Cups 100 Pcs Pouch"
            }
        ],
        "name": "Compostable Cups 200ml – 100Pcs",
        "displayName": "Compostable Cups 200ml – 100Pcs",
        "category": 4,
        "previewImage": "https://s3.amazonaws.com/biogreenmart.apiplatform.io/assets/images/products/compostable_cups/biogreen-biodegradable-compostable-water-glass-200ml.png",
        "isHomePageItem": true,
        "discountPrice": 0,
        "actualPrice": 300,
        "finalPrice": 300
    },
    {
         "name": "Compostable Cups 200ml – 100Pcs",
        "displayName": "Compostable Cups 200ml – 100Pcs",
        "category": 4,
        "previewImage": "https://s3.amazonaws.com/biogreenmart.apiplatform.io/assets/images/products/compostable_cups/biogreen-biodegradable-compostable-water-glass-200ml.png",
        "isHomePageItem": true,
        "discountPrice": 0,
        "actualPrice": 300,
        "finalPrice": 300
    },
     {
         "name": "Compostable Cups 200ml – 100Pcs",
        "displayName": "Compostable Cups 200ml – 100Pcs",
        "category": 4,
        "previewImage": "https://s3.amazonaws.com/biogreenmart.apiplatform.io/assets/images/products/compostable_cups/biogreen-biodegradable-compostable-water-glass-200ml.png",
        "isHomePageItem": true,
        "discountPrice": 0,
        "actualPrice": 300,
        "finalPrice": 300
    },
     {
         "name": "Compostable Cups 200ml – 100Pcs",
        "displayName": "Compostable Cups 200ml – 100Pcs",
        "category": 4,
        "previewImage": "https://s3.amazonaws.com/biogreenmart.apiplatform.io/assets/images/products/compostable_cups/biogreen-biodegradable-compostable-water-glass-200ml.png",
        "isHomePageItem": true,
        "discountPrice": 0,
        "actualPrice": 300,
        "finalPrice": 300
    }
    
]

console.log(data[0].previewImage);




export default function Items() {
   const [count,setCount] = useState(0);
//    console.log(count)
    return (
       <View style={styles.container}>
        <FlatList keyExtractor={(item,index)=>'key'+index} data={data} renderItem={({item})=>(
            <View>
            <View style={styles.imgContainer}>
                 <Image style={styles.imageData} source={require("../images/cup.jpg")} />
                 <View style={styles.txtContents}>
                 <Text style={styles.cardText}>{item.name}</Text>
                  <Text style={styles.priceText}>₹ {item.actualPrice}</Text>
                 <View style={styles.counterStyle}>
                      
                <Icon.Button name="ios-remove" size={10} color="#007eb9" onPress={()=>setCount(count - 1)} backgroundColor="#fff" iconStyle={{marginRight:0}} style={styles.deleteIcon} />
                 <Text style={styles.counterText}>{count}</Text> 
                 <Icon.Button name="ios-add" size={10} color="#007eb9" onPress={()=>setCount(count + 1)} backgroundColor="#fff" iconStyle={{marginRight:0}} style={styles.addIcon} />

                 <View>
                     <Icon name="ios-trash" size={20} color="#6F4C5B"  /> 
                 </View>
             </View>
         </View>
     </View>
        <View style={{borderBottomColor:"#FAEEE0",borderBottomWidth:1,marginTop:25,width:"100%"}}></View></View>
        )} />
       
        </View>
        
    )
}


const styles = StyleSheet.create({
  container:{
     marginTop:2,
     backgroundColor:"#fff",
     flexDirection:"row",
     flex:1
  },



imgContainer:{},
 
imageData:{
    width:125,
    height:125,
 },

txtContents:{
    position:"absolute",
    right:10,
    top:10,
    width:"50%",
    textAlign:"center",
    alignItems:"flex-start",
},

 
  cardText:{
      fontSize:16,
      color:"#2e2f30"
  },
  flexItems:{},

  priceText:{
      fontSize:25,
      fontWeight:"bold",
  },
  counterStyle:{
      flex:1,
      flexDirection:"row",
      justifyContent:"space-evenly",
      alignItems:"center",
      borderColor:"black",
      backgroundColor:"#fff"
  },
  counterText:{
    marginRight:25,
    marginLeft:25
  },
  deleteIcon:{
    //   borderRadius:15,
    //   backgroundColor:"gray",
    //   height:30,
    //   width:30


    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d1d1d1',
  },
  addIcon:{
    //   borderRadius:15,
    //   backgroundColor:"gray",
    //   height:30,
    //   width:30


    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d1d1d1',
  },

})
