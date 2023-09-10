import { List, ListItem, Card } from "@material-tailwind/react";
import React from "react";
 
export default function Report() {
  return (
    <Card className="w-96">
      <List>
        <ListItem>Age: 67</ListItem>
        <ListItem>sex: Male</ListItem>
        <ListItem>dataset: Cleveland</ListItem>
        <ListItem>cp: asymptomatic</ListItem>
        <ListItem>trestbps: 145</ListItem>
        <ListItem>chol: 229</ListItem>
        <ListItem>fbs: FALSE</ListItem>
        <ListItem>restecg: lv hypertrophy</ListItem>
        <ListItem>thalch: 172</ListItem>
      </List>
    </Card>
  );
}