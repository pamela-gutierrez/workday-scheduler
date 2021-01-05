# Workday Scheduler

This application is a work day scheduler intended to help the user organize their workday during the typical business hours of 9am to 5pm. 

![Site] (INSERT PIC HERE)

## **Built With**
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Git Hub](https://github.com/)
* [Moment.js](https://momentjs.com/)
*  Git - used to track changes to code
______________________________________________________________________________
  
### **Summary**

As a single-day work day scheduler it is important that the application offers maximum efficiency to the user. To help accomplish this, the different hours of the day are color-coded to reflect if they are in the past, present, or future. The application can also store the data even after the page is refreshed allowing the user to update it multiple times throughout the day. The date and time of the lastest refresh is displayed at the top of the scheduler when the page first loads.

______________________________________________________________________________

#### **Code Snippet**

The color coded time blocks are accomplished using a combination of variables, jQuery selectors, and a for loop. The jQuery selector identifies the class of "id-md-2" in the HTML which holds the differnt times of the day. The following for loop interates through those times and compares it the currentTimeEl which is defined by a moment.js function. I navigated through the DOM tree to arrive at different elements.

```
var allTimes = $(".col-md-2")
for (var i = 0; i < allTimes.length; i++) {
            var currentTimeEl = $(allTimes[i])
            var currentTextArea = currentTimeEl.siblings(".col-md-9")
            }
        }
```


______________________________________________________________________________


#### **Deployed Link**

* [See Live Site](https://pamela-gutierrez.github.io/workday-scheduler/)

### **Author Links**

* **PAMELA GUTIERREZ**
* **UC Berkeley Coding Bootcamp**
  
- [Link to Portfolio Site](#)
- [Link to Github](https://github.com/pamela-gutierrez) 
- [Link to LinkedIn](www.linkedin.com/in/pamela-gutierrez)



______________________________________________________________________________

#### **License**

This project is licensed under the MIT License


   