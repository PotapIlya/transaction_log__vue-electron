import { JsonCreate } from '@/types/json'

export default class Json {

    // @ts-ignore
    fs : object = window['fs']
    defaultPath = './src/json/';
    options = {
        encoding: 'utf8'
    }

    constructor() {
        // console.log(this.fs)
        this.init()
    }

    private init() : void{

    }

    getFileByName(name : string) : JsonCreate{
        return JSON.parse(
            // @ts-ignore
            this.fs.readFileSync(this.filepath(name), this.options.encoding)
        )
    }

    create(data : JsonCreate, resp : (p: { data: any; status: boolean }) => any) : any {

        // @ts-ignore
        this.fs.writeFile<object>(this.filepath(data.name), JSON.stringify(data), this.options.encoding, (err : any) => {
            if (err) resp({data: err, status: false})

            resp ({
                data: data,
                status: true
            })
        });
    }

    filepath(fileName : string, path : string = '') : string {
        return this.defaultPath + path + fileName + '.json'
    }


}

// export default class Json{
//
//     fs = window.fs;
//     defaultPath = './src/json/';
//     options = {
//         encoding: 'utf8'
//     }
//
//     getFileByName(name){
//         return JSON.parse(
//             this.fs.readFileSync(this.filepath(name), this.options.encoding)
//         )
//     }
//     getFileByPath(file){
//         return JSON.parse(
//             this.fs.readFileSync(this.filepath(file, 'shema/'), this.options.encoding)
//         )
//     }
//
//     init(){
//         console.log('Start init...')
//
//         this.getFileByPath('basic').forEach( file => {
//             if (!this.fs.existsSync(this.filepath(file.name))) {
//
//                 this.create(file)
//
//                 console.log(`Create ${file}.json file`)
//             }
//         })
//     }
//
//     create(data, resp) {
//         this.fs.writeFile(this.filepath(data.name), JSON.stringify(data), this.options.encoding, (err) => {
//             if (err) resp({data: err, status: false})
//
//             console.log(`The file => ${data.name} was saved!`);
//             resp ({
//                 data: data,
//                 status: true
//             })
//         });
//     }
//
//
//
//     filepath(fileName, path = ''){
//         if (!fileName) fileName = 'default_' + Math.random()
//
//         return this.defaultPath + path + fileName + '.json'
//     }
// }