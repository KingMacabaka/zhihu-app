const express = require('express')
const app = express()
//推荐数据
var recommendList = require('./src/data/recommend.json')
var momentsList = require('./src/data/moments.json')
var totalList = require('./src/data/total.json')
var digitalList = require('./src/data/digital.json')
var fashionList = require('./src/data/fashion.json')
var filmList = require('./src/data/film.json')
var scienceList = require('./src/data/science.json')
var sportList = require('./src/data/sport.json')
var popularityList = require('./src/data/popularity.json')
var potentialList = require('./src/data/potential.json')
var newProblemList = require('./src/data/newProblem.json')
var everyoneList = require('./src/data/everyone.json')
var apiRoutes = express.Router()
app.use('/api',apiRoutes)


module.exports = {
	
  devServer: {
		host:'localhost',
		port: 9090,
		https:false,
		open:true,
		hotOnly:true,
		before(app){
			app.get('/api/recommend',(req,res)=>{
				res.json({
					code:1,
					msg:'成功',
					data:recommendList
				})
			})
			app.get('/api/moments',(req,res)=>{
				res.json({
					code:1,
					msg:'成功',
					data:momentsList
				})
			})
			app.get('/api/hot-lists/total',(req,res)=>{
				res.json({
					code:1,
					msg:'成功',
					data:totalList
				})
			})
			app.get('/api/hot-lists/digital',(req,res)=>{
				res.json({
					code:1,
					msg:'成功',
					data:digitalList
				})
			})
			app.get('/api/hot-lists/fashion',(req,res)=>{
				res.json({
					code:1,
					msg:'成功',
					data:fashionList
				})
				
			})
			app.get('/api/hot-lists/film',(req,res)=>{
				res.json({
					code:1,
					msg:'成功',
					data:filmList
				})
				
			})
			app.get('/api/hot-lists/science',(req,res)=>{
				res.json({
					code:1,
					msg:'成功',
					data:scienceList
				})
				
			})
			app.get('/api/hot-lists/sport',(req,res)=>{
				res.json({
					code:1,
					msg:'成功',
					data:sportList
				})
			})
			app.get('/api/question-wait/popularity',(req,res)=>{
				res.json({
					code:1,
					msg:'成功',
					data:popularityList
				})
			})
			app.get('/api/question-wait/potential',(req,res)=>{
				res.json({
					code:1,
					msg:'成功',
					data:potentialList
				})
			})
			app.get('/api/question-wait/newProblem',(req,res)=>{
				res.json({
					code:1,
					msg:'成功',
					data:newProblemList
				})
			})
			app.get('/api/question-wait/everyone',(req,res)=>{
				res.json({
					code:1,
					msg:'成功',
					data:everyoneList
				})
			})
			
	}
  },
  "transpileDependencies": [
    "vuetify"
  ]
}