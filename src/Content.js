import React from "react";
export default function Content() {
  return (
    <div className="content">
      <h2>Reasons Why I Love React</h2>
      <ul className="reasons">
        <li className="reason">
          Less Boilerplate. This is a big one for me. As a developer, there are
          many advantages to writing less code
        </li>
        <li className="reason">
          Easier to understand. Unlike class-based components, I find functional
          components far easier to understand
        </li>
        <li className="reason">
          Consistent code. Before hooks came along, it was inevitable that there
          would be a mixture of class-based components
        </li>
        <li className="reason">It Is Declarative and Maintained By Facebook</li>
      </ul>
    </div>
  );
}
