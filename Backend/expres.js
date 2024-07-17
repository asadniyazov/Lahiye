import  mongoose from 'mongoose'
import  express from 'express'
import cors from "cors"
import  bodyParser from 'body-parser'
import 'dotenv/config'
import  nodemailer from 'nodemailer'
import { usersRouter } from './Routers/UserRoute.js'
import { authRouter } from './Routers/AuthRouter.js'

const app = express();

app.use(cors())
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/users',usersRouter);
app.use('/',authRouter)


const filmSchema = new mongoose.Schema({
    name: { type: String, required: true },
    year: { type: Number, required: true },
    category: { type: String, required: true },
    imgUrl: String,
    videoUrl: String,
    description: String,
    rating:Number
  });
  
  const FilmModel = mongoose.model('Film', filmSchema);
  app.get('/films', async (req, res) => {
    const films= await FilmModel.find()
    res.send(films)
  })

  app.get('/films/:id', async (req, res) => {
    const {id}=req.params
    const films= await FilmModel.findById(id) 
    res.send(films)
  })
  
  
  app.get('/film10', async (req, res) => {
    try {
      const films = await FilmModel.find({ rating: 10 }); // Rating'i 10 olan filmleri getir
      res.json(films);
    } catch (error) {
      console.error('Error fetching films:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });


  app.delete('/films/:id', async (req, res) => {
    const {id}=req.params
    const film= await FilmModel.findByIdAndDelete(id) 
    res.send({message:"delete olundu"})
  })

  
  app.get('/api/kategoriler', async (req, res) => {
      try {
          const kategoriler = await FilmModel.distinct('category');
          res.json(kategoriler);
        } catch (err) {
            console.error('Kategoriler getirilirken hata:', err);
            res.status(500).json({ error: 'Server hatası' });
        }
    });
    
    
    app.get('/api/yillar', async (req, res) => {
        try {
            const yillar = await FilmModel.distinct('year');
            res.json(yillar);
        } catch (err) {
            console.error('Yıllar getirilirken hata:', err);
            res.status(500).json({ error: 'Server hatası' });
        }
    });   
    app.post('/api/tavsiyeler', async (req, res) => {
        const { category, year } = req.body;
        const query = {};
        
        if (category) {
            query.category = category;
        }
        
        if (year) {
            query.year = parseInt(year);
        }
        
        try {
            const tavsiyeFilmler = await FilmModel.find(query);
            res.json(tavsiyeFilmler);
        } catch (err) {
            console.error('Tavsiyeler getirilirken hata:', err);
            res.status(500).json({ error: 'Server hatası' });
        }
    });
    
    app.post('/films', async(req,res)=>{
        try{
            
            const body=req.body
            const products=new FilmModel(body)
            products.save()
            res.send(products)
        }
        catch (err) {
            console.error('Tavsiyeler getirilirken hata:', err);
            res.status(500).json({ error: 'Server hatası' });
        }})
        
        app.post('/api/send-email', async (req, res) => {
            const { name, email, message } = req.body;
          
            try {
              // E-posta gönderme işlemi
              let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: 'bd5scjwr5@code.edu.az', // gönderici e-posta adresi
                  pass: 'esed2004' // gönderici e-posta şifresi
                }
              });
          
              let info = await transporter.sendMail({
                from: 'bd5scjwr5@code.edu.az', // gönderici e-posta adresi
                to: 'bd5scjwr5@code.edu.az', // hedef e-posta adresi
                subject: 'New message from contact form',
                text: `
                  Name: ${name}
                  Email: ${email}
                  Message: ${message}
                `
              });
          
              console.log('Message sent: %s', info.messageId);
              res.json({ success: true, message: 'Email sent successfully' });
            } catch (error) {
              console.error('Error sending email:', error);
              res.status(500).json({ success: false, message: 'Failed to send email' });
            }
          });


        app.listen(process.env.Port, () => {
            console.log(`Sunucu ${process.env.Port} portunda çalışıyor.`);
        });    




mongoose.connect(process.env.Mongodb_Connection, {
}).then(() => {
  console.log('Succsess');
}).catch((err) => {
  console.error('Not Sucsess', err);
});