import React from "react";
import HelloWorld from "./exercises/ex1";
import GreetingCard from "./exercises/ex2";
import Counter from "./exercises/ex3";
import ToggleVisibility from "./exercises/ex4";
import TodoListCombined from "./exercises/ex56";
import Timer from "./exercises/ex7";
import UserProfile from "./exercises/ex8";
import NavigationApp from "./exercises/ex9";
import LoginForm from "./exercises/ex10";
import ThemeSwitcherApp from "./exercises/ex11";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>Lab 4 React</h1>

      {/* Exercise 1 */}
      <section style={sectionStyle}>
        <h2>Ex1:</h2>
        <HelloWorld />
      </section>

      {/* Exercise 2 */}
      <section style={sectionStyle}>
        <h2>Ex 2:</h2>
        <GreetingCard name="THUAN" />
        <GreetingCard name="BEAN" />
        <GreetingCard name="PATRICK" />
      </section>

      {/* Exercise 3 */}
      <section style={sectionStyle}>
        <h2>Ex 3:</h2>
        <Counter />
      </section>

      {/* Exercise 4 */}
      <section style={sectionStyle}>
        <h2>Ex 4:</h2>
        <ToggleVisibility />
      </section>

      {/* Exercise 5+6 */}
      <section style={sectionStyle}>
        <h2>Exercise 5 & 6:</h2>
        <TodoListCombined />
      </section>

      {/* Exercise 7 */}
      <section style={sectionStyle}>
        <h2>Exercise 7: </h2>
        <Timer />
      </section>

      {/* Exercise 8 */}
      <section style={sectionStyle}>
        <h2>Exercise 8: </h2>
        <UserProfile />
      </section>

      {/* Exercise 9 */}
      <section style={sectionStyle}>
        <h2>Exercise 9: </h2>
        <NavigationApp />
      </section>

      {/* Exercise 10 */}
      <section style={sectionStyle}>
        <h2>Exercise 10: </h2>
        <LoginForm />
      </section>

      {/* Exercise 11 */}
      <section style={sectionStyle}>
        <h2>Exercise 11: Theme Switcher (Context API)</h2>
        <ThemeSwitcherApp />
      </section>
    </div>
  );
}

const sectionStyle = {
  padding: "16px",
  marginBottom: "24px",
  backgroundColor: "#ffffffff",
};

export default App;
