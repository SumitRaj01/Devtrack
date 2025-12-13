import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  status: text("status").default("Active"),
  userId: integer("user_id"), 
});

export const users = pgTable("users",{
    id: serial("id").primaryKey(),
    name: text("name"),
    email: text("email").notNull(),
    userId: integer("user_id")
})

export const tasks = pgTable("tasks", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  completed: integer("completed").default(0), 
  projectId: integer("project_id")
  .notNull()
  .references(()=>projects.id) 
});
