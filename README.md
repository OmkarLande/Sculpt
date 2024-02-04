
  <h3 align="center">Sculpt-Real Time Figma Clone</h3>

This repository presents Sculpt, a sleek Figma clone showcasing the integration of real-world features such as live collaboration with cursor chat, comments, reactions, and the ability to draw designs (shapes and image upload) on the canvas using fabric.js.

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- TypeScript
- Liveblocks
- Fabric.js
- Shadcn
- Tailwind CSS

## <a name="features">🔋 Features</a>

👉 Multi Cursors, Cursor Chat, and Reactions: Collaborate seamlessly with multiple users, complete with individual cursors, real-time chat, and reactions for interactive communication.

👉 Active Users: Keep track of engaged users with a list of currently active participants in the collaborative environment.

👉 Comment Bubbles: Foster communication and feedback by attaching comments to specific elements on the canvas.

👉 Creating Different Shapes: Generate a variety of shapes on the canvas using provided tools, adding diverse design elements.

👉 Uploading Images: Import images onto the canvas to enhance visual content in the design.

👉 Customization: Fine-tune design elements with customizable properties for greater flexibility.

👉 Freeform Drawing: Promote artistic expression and creative design by allowing users to draw freely on the canvas.

👉 Undo/Redo: Reverse or restore previous actions, offering flexibility in design decision-making.

👉 Keyboard Actions: Increase efficiency and accessibility with keyboard shortcuts for various actions, including copying, pasting, deleting, and triggering features like cursor chat and reactions.

👉 History: Review the chronological history of actions and changes made on the canvas, aiding in project management and version control.

👉 Deleting, Scaling, Moving, Clearing, Exporting Canvas: Manage design elements efficiently with functions like deletion, scaling, moving, clearing the canvas, and exporting the final design for external use.

...and many more, including robust code architecture, advanced React hooks, and reusability. 

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Cloning the Repository**

```bash
git clone https://github.com/OmkarLande/Sculpt.git
cd sculpt
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=
```

Replace the placeholder values with your actual Liveblocks credentials. You can obtain these credentials by signing up on the [Liveblocks website](https://liveblocks.io).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
