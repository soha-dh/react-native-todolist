import { ScrollView, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./App.style";
import { Header } from "./components/Header/Header";
import { CardTodo } from "./components/CardTodo/CardTodo";
import { useState } from "react";
import { TabButtonMenu } from "./components/TabButtonMenu/TabButtonMenu";

export default function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "walking the dog", isCompleted: true },
    { id: 2, title: "runing the dog", isCompleted: false },
    { id: 3, title: "sound of the dog", isCompleted: false },
    { id: 4, title: "house of the dog", isCompleted: true },
    { id: 5, title: "food of the dog", isCompleted: false },
    { id: 6, title: "toy of the dog", isCompleted: false },
    { id: 7, title: "house of the dog", isCompleted: true },
    { id: 8, title: "food of the dog", isCompleted: false },
    { id: 9, title: "toy of the dog", isCompleted: false },
  ]);

  const [selectedTabName, setSelectedTabName] = useState("all");

  function getFilteredList() {
    switch (selectedTabName) {
      case "all":
        return todoList;
      case "inProgress":
        return todoList.filter((todo) => todo.isCompleted === false);
      case "done":
        return todoList.filter((todo) => todo.isCompleted === true);
    }
  }

  function renderTodoList() {
    return getFilteredList().map((todo) => (
      <View key={todo.id} style={s.CardItem}>
        <CardTodo onPress={updateTodo} todo={todo} />
      </View>
    ));
  }

  function updateTodo(todo) {
    const updatedTodo = {
      ...todo,
      isCompleted: !todo.isCompleted,
    };

    const updatedTodoList = [...todoList];
    const indexToUpdate = updatedTodoList.findIndex(
      (t) => t.id === updatedTodo.id
    );
    updatedTodoList[indexToUpdate] = updatedTodo;
    setTodoList(updatedTodoList);
  }

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={s.app}>
          <View style={s.header}>
            <Header />
          </View>
          <View style={s.body}>
            <ScrollView>{renderTodoList()}</ScrollView>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={s.footer}>
        <TabButtonMenu
          todoList={todoList}
          onPress={setSelectedTabName}
          selectedTabName={selectedTabName}
        />
      </View>
    </>
  );
}
