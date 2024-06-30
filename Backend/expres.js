import  mongoose from 'mongoose'
import  express from 'express'
import cors from "cors"
import  bodyParser from 'body-parser'
import 'dotenv/config'
const app = express();

app.use(cors())
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const filmSchema = new mongoose.Schema({
    name: { type: String, required: true },
    year: { type: Number, required: true },
    category: { type: String, required: true },
    imgUrl: String,
    videoUrl: String,
    description: String
  });
  
  const FilmModel = mongoose.model('Film', filmSchema);
  
  
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
        
        app.listen(process.env.Port, () => {
            console.log(`Sunucu ${process.env.Port} portunda çalışıyor.`);
        });

mongoose.connect(process.env.Mongodb_Connection, {
}).then(() => {
  console.log('Succsess');
}).catch((err) => {
  console.error('Not Sucsess', err);
});