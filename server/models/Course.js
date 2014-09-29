var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
  title: {type:String, required:'{PATH} is required!'},
  featured: {type:Boolean, required:'{PATH} is required!'},
  published: {type:Date, required:'{PATH} is required!'},
  tags: [String]
});
var Course = mongoose.model('Course', courseSchema);

function createDefaultCourses() {
  Course.find({}).exec(function(err, collection) {
    if(collection.length === 0) {

      Course.create({title: 'Top 10 Tricks for Shopping at Amazon', featured: true, published: new Date(), tags: ['Amazon']});
      Course.create({title: 'MoboRobo is a Powerful Desktop Manager for Android and iOS Devices', featured: false, published: new Date(), tags: ['iOS']});
      Course.create({title: 'Know the Warning Signs of a Heart Attack', featured: false, published: new Date('7/12/2013'), tags: ['Health']});
      Course.create({title: 'The Best PCs You Can Build for $300, $600, and $1200', featured: true, published: new Date('1/1/2013'), tags: ['PC','Build']});
      Course.create({title: 'JavaScript for People over 20', featured: true, published: new Date('10/13/2013'), tags: ['JS']});
      Course.create({title: 'Maintainable Code for Cowards', featured: true, published: new Date('3/1/2013'), tags: ['Coding']});
      Course.create({title: 'A Survival Guide to Code Reviews', featured: true, published: new Date('2/1/2013'), tags: ['Coding']});
      Course.create({title: 'How to Job Hunt Without Alerting your Boss', featured: true, published: new Date('10/7/2013'), tags: ['Misc']});
      Course.create({title: 'How to Keep your Soul and go into Management', featured: false, published: new Date('8/1/2013'), tags: ['Management']});
      Course.create({title: 'Telling Recruiters to Leave You Alone', featured: false, published: new Date('11/1/2013'), tags: ['Misc']});
      Course.create({title: "Writing Code that Doesn't Suck", featured: true, published: new Date('10/13/2013'), tags: ['Coding']});
      Course.create({title: 'Code Reviews for Jerks', featured: false, published: new Date('10/1/2013'), tags: ['Coding']});
      Course.create({title: 'How to Deal with Narcissistic Coworkers', featured: true, published: new Date('2/15/2013'), tags: ['Misc']});
      Course.create({title: 'Death March Coding for Fun and Profit', featured: true, published: new Date('7/1/2013'), tags: ['Coding', 'Misc']});
      Course.create({title: 'Learn How to Make Captivating Presentations with This Free Online Book', featured: true, published: new Date('7/1/2014'), tags: ['Presentation', 'Book']});
      Course.create({title: 'Get a Domain Name and Hosting for $2.95 a Month (67% Off)',featured:true,published:new Date('09/25/2014'),tags:['Domain Name']});
      Course.create({title: 'How To Check If Your Mac or Linux Machine Is Vulnerable to Shellshock', featured: true, published: new Date('9/28/2014'), tags: ['Mac', 'Linux','Shellshock']});

    }
  })
}

exports.createDefaultCourses = createDefaultCourses;