import React, { useEffect } from "react";
import { useState } from "react";
import { View, Text, Button } from "react-native";
import { getTimeRemaining, timerEndTime } from "../utils/time-utils";

const timer = require("react-native-timer");

const GameScreen = ({ navigation }) => {
  const [currentTime, setCurrentTime] = useState("25:00");

  useEffect(() => {
    const leavingPage = navigation.addListener("blur", () => {
      timer.clearInterval(this, "GameInterval");
    });
    return leavingPage;
  }, [navigation]);

  const countDown = (endTime) => {
    const t = getTimeRemaining(endTime);
    const countDownString = `${t.minutes}:${t.seconds}`;
    setCurrentTime(countDownString);
    if (t.total <= 0) {
      // Timer done!
      timer.clearInterval(this, "GameInterval");
    }
  };

  const TimerHandler = () => {
    const endTime = timerEndTime();
    timer.setInterval(this, "GameInterval", () => countDown(endTime), 1000);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Game!</Text>
      <Button title="test" onPress={TimerHandler} />
      <Text>{currentTime}</Text>
    </View>
  );
};

export default GameScreen;
