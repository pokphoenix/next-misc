export default function handler(req, res){
    res.setPreviewData({user: 'Pok phoenix'})
    res.redirect(req.query.redirect)
}