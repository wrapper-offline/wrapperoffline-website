const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.use( express.static( "public" ) );

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/support', (req, res) => {
    res.render('support')
})

app.get('/faq', (req, res) => {
    res.render('faq')
})

app.get('/get-involved', (req, res) => {
    res.render('contribute')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/download', (req, res) => {
    res.render('downloads', { latestVer: "2.0.0" }) // Change this whenever new version is released
})

app.get('/download/winlatest', (req, res) => {
    res.redirect('https://storage.cloud.google.com/wrapper-offline-latest/wrapper-offline-win32-x64.zip')
})

app.get('/download/osxlatest', (req, res) => {
    res.redirect('https://storage.cloud.google.com/wrapper-offline-latest/Wrapper.Offline-macos-x64.zip')
})

app.get('/download/tuxlatest', (req, res) => {
    res.redirect('https://storage.cloud.google.com/wrapper-offline-latest/wrapper-offline-linux-x64.zip')
})

app.get('/download/src-2.0.0-zip', (req, res) => {
    res.redirect('https://storage.cloud.google.com/wrapper-offline-src/wrapper-offline-2.0.0.zip')
})

app.get('/download/src-2.0.0-tarball', (req, res) => {
    res.redirect('https://storage.cloud.google.com/wrapper-offline-src/wrapper-offline-2.0.0.tar.gz')
})

app.listen(3000)