import express from "express";
import dotenv from "dotenv";
import connectDB from "./db.js";
import { Blog } from "./models/blog.models.js";
import { Project } from "./models/projects.models.js";
import cors from 'cors';
import { Service } from "./models/service.models.js";

const app = express();
const port = process.env.PORT || 3000;

dotenv.config({ path: "./.env" });

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());

connectDB();

app.post('/api/v1/project-fetch', async (req, res) => {
    try {
        console.log(req.body);
        const { passw } = req.body;
        if (passw !== process.env.PASSWORD) {
            console.log("Invalid password");
            
            return res.status(401).json({ error: "Invalid password" });
        }

        // Wait for the query to resolve
        const projects = await Project.find();
        console.log(projects);
        
        res.status(200).json({ projects });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});


app.post('/api/v1/project-create', (req, res) => {
    console.log(req.body);
    const { passw } = req.body;
    if (passw !== process.env.PASSWORD) {
        throw new Error("Invalid password");
    }

    const {title, description, git, live} = req.body;
    const project = new Project({ title, description, git, live });
    project.save();
    console.log(project);

    
    res.status(200).json({ message: 'Data received' });
});


app.post('/api/v1/service-create', (req, res) => {
   try {
     console.log(req.body);
     const { passw } = req.body;
     if (passw!== process.env.PASSWORD) {
         throw new Error("Invalid password");
     }
     const {title} = req.body;
     const service = new Service({ title });
     service.save();
 
     res.status(200).json({message:"data recieved"});
   } catch (error) {
    console.log("Error while creating service: ",error);
    
   }
})

app.post('/api/v1/service-fetch', async (req, res) => {
    try {
        console.log(req.body);
        const { passw } = req.body;
        if (passw!== process.env.PASSWORD) {
            throw new Error("Invalid password");
        }
        const service = await Service.find();
        res.status(200).json({ service });
    } catch (error) {
        console.log("Error while fetching service: ", error);
        
    }
})

app.post('/api/v1/blog-create', (req, res) => {
    try {
        console.log(req.body);
        const { passw } = req.body;
        if (passw!== process.env.PASSWORD) {
            throw new Error("Invalid password");
        }
        const {title, content} = req.body;
        const blog = new Blog({ title, content});
        blog.save();
        
        res.status(200).json({message:"data recieved"});
    } catch (error) {
        console.log("Error while creating blog: ", error);
        
    }
})

app.post('/api/v1/blog-fetch', async (req, res) => {
    try {
        console.log(req.body);
        const { passw } = req.body;
        if (passw!== process.env.PASSWORD) {
            throw new Error("Invalid password");
        }
        const blog = await Blog.find();
        res.status(200).json({ blog });
    } catch (error) {
        console.log("Error while fetching blog: ", error);
        
    }
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
