import {Book} from './book.model'
import { EventEmitter } from '@angular/core';
import { EditBookComponent } from './admin/edit-book/edit-book.component';

export class BooksService {
    private books = [
    {"isbn":"126308030-8","title":"Blackbeard, the Pirate","description":"Excision of Trigeminal Nerve, Open Approach","author":"Benedikta Bradnum","price":60},
    {"isbn":"923537930-X","title":"Peggy Sue Got Married","description":"Drainage of Esophagogastric Junction, Via Natural or Artificial Opening","author":"Olga Mayhead","price":6},
    {"isbn":"029579934-X","title":"Ted","description":"Excision of Perineum Bursa and Ligament, Percutaneous Endoscopic Approach, Diagnostic","author":"Noell McPeice","price":43},
    {"isbn":"839645824-3","title":"How to Kill Your Neighbor's Dog","description":"Revision of Synthetic Substitute in Right Eye, External Approach","author":"Boyce Butler","price":10},
    {"isbn":"426487447-5","title":"Place Beyond the Pines, The","description":"Occlusion of Bilateral Vas Deferens, Percutaneous Endoscopic Approach","author":"Hendrik Quilliam","price":59},
    {"isbn":"562756468-7","title":"Apnea (Apnoia)","description":"Release Right Eustachian Tube, Via Natural or Artificial Opening Endoscopic","author":"Eliot Shadwick","price":14},
    {"isbn":"291828930-2","title":"Africa: Texas Style","description":"Anatomical Regions, Upper Extremities, Supplement","author":"Violette Paulus","price":25},
    {"isbn":"957791415-2","title":"Confessions of a Window Cleaner","description":"Revision of Synthetic Substitute in Left Wrist Joint, Percutaneous Endoscopic Approach","author":"Darwin Braban","price":99},
    {"isbn":"942621892-0","title":"Valley of the Bees (Údolí vcel)","description":"Alteration of Left External Ear, Percutaneous Endoscopic Approach","author":"Laurence Ticksall","price":60},
    {"isbn":"907092884-1","title":"One Piece Film Z","description":"Supplement Cisterna Chyli with Autologous Tissue Substitute, Open Approach","author":"Twyla Sieghard","price":60},
    {"isbn":"867439729-8","title":"New Kids Turbo","description":"Excision of Left Sacroiliac Joint, Open Approach, Diagnostic","author":"Chlo Blackie","price":79},
    {"isbn":"316344998-0","title":"Changing Lanes","description":"Drainage of Left Epididymis with Drainage Device, Percutaneous Endoscopic Approach","author":"Jereme Haquard","price":100},
    {"isbn":"351035828-7","title":"Human Behavior Experiments, The","description":"Occlusion of Right Axillary Lymphatic with Extraluminal Device, Percutaneous Endoscopic Approach","author":"Lauraine Lotterington","price":55},
    {"isbn":"129107475-9","title":"Girl From Nowhere, The","description":"Detachment at Left Hand, Partial 3rd Ray, Open Approach","author":"Clayborn Kollasch","price":7},
    {"isbn":"527327562-8","title":"1990: The Bronx Warriors (1990: I guerrieri del Bronx)","description":"Bypass Right Axillary Artery to Bilateral Upper Leg Artery with Synthetic Substitute, Open Approach","author":"Dina Jorin","price":89},
    {"isbn":"097933186-2","title":"Mr. Troop Mom","description":"Introduction of Electrolytic and Water Balance Substance into Muscle, Percutaneous Approach","author":"Jeri Boone","price":53},
    {"isbn":"547712067-3","title":"First Time, The","description":"Drainage of Left Wrist Bursa and Ligament with Drainage Device, Open Approach","author":"Cicely Nash","price":55},
    {"isbn":"652914721-7","title":"Pervert's Guide to Cinema, The","description":"Bypass Portal Vein to Lower Vein with Intraluminal Device, Percutaneous Endoscopic Approach","author":"Kimbra Drackford","price":65},
    {"isbn":"834843328-7","title":"Hamlet","description":"Dilation of Left Anterior Tibial Artery, Bifurcation, with Four or More Drug-eluting Intraluminal Devices, Open Approach","author":"Kandace Castellan","price":31},
    {"isbn":"940782735-6","title":"Family Plot","description":"Supplement Left Large Intestine with Synthetic Substitute, Percutaneous Endoscopic Approach","author":"Nettle Roseby","price":25},
    {"isbn":"239313085-3","title":"Fidel","description":"Occlusion of Right Ureter with Extraluminal Device, Percutaneous Endoscopic Approach","author":"Demetri Sturgeon","price":1},
    {"isbn":"176750078-5","title":"Crime Busters","description":"Reposition Occipital-cervical Joint with Internal Fixation Device, External Approach","author":"Ninnetta Bolus","price":94},
    {"isbn":"065616213-9","title":"Kelly's Heroes","description":"Revision of Autologous Tissue Substitute in Nose, Percutaneous Approach","author":"Trent Jobling","price":32},
    {"isbn":"907377328-8","title":"Mad Detective (Sun taam)","description":"Alteration of Abdominal Wall with Nonautologous Tissue Substitute, Percutaneous Approach","author":"Neddie Greeno","price":63},
    {"isbn":"105167649-5","title":"Lucky Ones, The","description":"Release Left Pelvic Bone, Percutaneous Endoscopic Approach","author":"Gray Pirson","price":38},
    {"isbn":"989014699-1","title":"Rush Hour","description":"Plain Radiography of Kidneys, Ureters and Bladder using Other Contrast","author":"Afton Hymans","price":45},
    {"isbn":"976807115-X","title":"Assembly (Ji jie hao) ","description":"Revision of Synthetic Substitute in Right Glenoid Cavity, Percutaneous Approach","author":"Tiertza Heathcott","price":22},
    {"isbn":"389036344-X","title":"Breathe In","description":"Repair Left Toe Phalanx, Percutaneous Endoscopic Approach","author":"Shannan Beeston","price":33},
    {"isbn":"407624285-8","title":"Whore","description":"Urinary System, Supplement","author":"Anthiathia Petkov","price":85},
    {"isbn":"634056540-9","title":"Bad Girls (Biches, Les)","description":"Excision of Left Main Bronchus, Via Natural or Artificial Opening","author":"Viola Purry","price":16},
    {"isbn":"958181761-1","title":"Diggstown","description":"Drainage of Left Upper Extremity Bursa and Ligament, Open Approach","author":"Ogdon Deighan","price":15},
    {"isbn":"691212312-0","title":"Spider's Stratagem, The (Strategia del ragno)","description":"Revision of Internal Fixation Device in Coccyx, Percutaneous Endoscopic Approach","author":"Reg McQuode","price":89},
    {"isbn":"468329624-1","title":"Help Me, Eros (Bang bang wo ai shen)","description":"Dilation of Left Common Carotid Artery with Three Intraluminal Devices, Open Approach","author":"Sutherland Trail","price":69},
    {"isbn":"620411823-4","title":"Vengeance: The Story of Tony Cimo","description":"Repair Right Conjunctiva, External Approach","author":"Hamel Greader","price":88},
    {"isbn":"458123606-1","title":"Fall Time","description":"Occlusion of Left Subclavian Vein with Extraluminal Device, Percutaneous Approach","author":"Stanford Matusson","price":7},
    {"isbn":"270606823-X","title":"Fred Claus","description":"Removal of Autologous Tissue Substitute from Chest Wall, External Approach","author":"Shara Villiers","price":20},
    {"isbn":"644457369-6","title":"Homeboy","description":"Supplement Right Metacarpocarpal Joint with Autologous Tissue Substitute, Percutaneous Approach","author":"Sharl Beinke","price":36},
    {"isbn":"029709517-X","title":"Burnt by the Sun 2 (Utomlyonnye solntsem 2)","description":"Reposition Left Fibula with Intramedullary Internal Fixation Device, Open Approach","author":"Berti Struthers","price":9},
    {"isbn":"716309901-0","title":"Rock-afire Explosion, The","description":"Replacement of Right Ureter with Autologous Tissue Substitute, Percutaneous Endoscopic Approach","author":"Hashim Heatly","price":25},
    {"isbn":"495119095-8","title":"The Incite Mill - 7 Day Death Game","description":"Bypass Jejunum to Cecum with Nonautologous Tissue Substitute, Via Natural or Artificial Opening Endoscopic","author":"Eugenie Tribble","price":47}
    ]

    onBookSelceted = new EventEmitter<Book>()
    booksChanged = new EventEmitter<Book[]>()

    getBooks(){
       // return Promise.resolve([...this.books])
       return new Promise(resolve=>{
           setTimeout(()=>{
                resolve(this.books)
           },800)
       })
    }

    getBook(isbn:string){
        //return Promise.resolve(this.books.find(b=>b.isbn===isbn))        
        return new Promise(resolve=>{
            setTimeout(()=>{
                 resolve(this.books.find(b=>b.isbn===isbn))
            },800)
        })
    }

    bookSelceted(book:Book){
        this.onBookSelceted.emit(book)
    }

    upsertBook(editedBook:Book){
        var index = this.books.findIndex(book=>book.isbn === editedBook.isbn)
        if(index >= 0) {
            this.books[index] = editedBook
        } else {
            this.books.push(editedBook)
        }
    }

    removeBook(book:Book){
        this.books = this.books.filter(b=>b.isbn !== book.isbn)
        this.booksChanged.emit(this.books)
    }
}