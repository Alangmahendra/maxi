var sgMail = require('@sendgrid/mail')
require('dotenv').config()
class Pesan {
    static sendmail(req,res){
        const data = req.body

        sgMail.setApiKey(process.env.SENDGRID_KEY)
        const maximo = {
                to: 'alangmahendra@gmail.com',
                from: 'noreply@coffeeshopmaximo.com',
                subject: `${data.nama} - Melakukan Pesanan`,
                text: 'COFFEESHOPMAXIMO.COM',
                html: `
                    <div>
                    
                <table border>
                <thead>
                    <tr>
                        <th colspan="2">
                                <center>
                                    Detil Pemesanan
                                </center>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Nama Pemesan</td>
                    <td>${data.nama}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                    <td>Alamat/lokasi Acara</td>
                    <td>${data.lokasi}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                    <td>No/Wa Pemesan</td>
                    <td>${data.telepon}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                    <td>Tangal Acara</td>
                    <td>${data.tanggal}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                    <td>Jenis Konsumsi</td>
                    <td>${data.konsumsi}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                    <td>Peserta Acara</td>
                    <td>${data.jumlah} orang</td>
                    </tr>
                </tbody>
            </table>
            </div>`
            };
            sgMail
            .send(maximo)
            .then(gotcha => {
                res.status(200).json({ message: "email terkirim",data:gotcha });
            })
            .catch(error => {
                console.log(error);
                res.status(500).json({ error: error });
            });
    }
}

module.exports = Pesan