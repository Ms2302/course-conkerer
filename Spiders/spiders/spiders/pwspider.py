import scrapy
import re
from scrapy_playwright.page import PageMethod

CourseId = 0
class PwspiderSpider(scrapy.Spider):
    name = "pwspider"
    allowed_domains = ['futurelearn.com']
    start_urls = ['https://www.futurelearn.com/subjects/it-and-computer-science-courses?all_courses=1']
    count = 0
    def parse(self, response):
        for link in response.css('div.m-card.Container-wrapper_7nJ95.Container-grey_75xp- a.index-module_anchor__24Vxj::attr(href)'):
            yield response.follow(link.extract(), callback=self.parse_categories)
        
    
    def parse_categories(self, response):
        title = response.css('div.InformationWidget-widgetWrapper_6ZMLn h1::text').extract_first()
        if title != None:
            self.count += 1
            if "Introductory" in response.css('div.listItemWithIcon-module_text__18TIF p::text').getall():
                level = "Introductory"
            elif "Intermediate" in response.css('div.listItemWithIcon-module_text__18TIF p::text').getall():
                level = "Intermediate"
            elif "Advanced" in response.css('div.listItemWithIcon-module_text__18TIF p::text').getall():
                level = "Advanced"
            else:
                level = "Intermediate"

            if "AI" in title:
                 yield{
                'id' : self.count,
                'title' : response.css('div.InformationWidget-widgetWrapper_6ZMLn h1::text').get(),
                'stars' : response.css('span.ReviewStars-starsWrapper_-V0eq::attr(aria-label)').get(),
                'time' : response.css('div.listItemWithIcon-module_text__18TIF p::text').get(),
                'image' : response.css('picture.PageHeader-picture_w9igg img::attr(src)').get(),
                'URL' : response.request.url,
                'Level' : level,
                'category' : "AI"
            }
            elif "Secur" in title:
                 yield{
                'id' : self.count,
                'title' : response.css('div.InformationWidget-widgetWrapper_6ZMLn h1::text').get(),
                'stars' : response.css('span.ReviewStars-starsWrapper_-V0eq::attr(aria-label)').get(),
                'time' : response.css('div.listItemWithIcon-module_text__18TIF p::text').get(),
                'img' : response.css('picture.PageHeader-picture_w9igg img::attr(src)').get(),
                'URL' : response.request.url,
                'Level' : level,
                'category' : "Security"
            }

            elif "Design" in title:
                 yield{
                'id' : self.count,
                'title' : response.css('div.InformationWidget-widgetWrapper_6ZMLn h1::text').get(),
                'stars' : response.css('span.ReviewStars-starsWrapper_-V0eq::attr(aria-label)').get(),
                'time' : response.css('div.listItemWithIcon-module_text__18TIF p::text').get(),
                'img' : response.css('picture.PageHeader-picture_w9igg img::attr(src)').get(),
                'Level' : level,
                'URL' : response.request.url,
                'category' : "Design"
            }
            else:
                
                 yield{
                'id' : self.count,
                'title' : response.css('div.InformationWidget-widgetWrapper_6ZMLn h1::text').get(),
                'stars' : response.css('span.ReviewStars-starsWrapper_-V0eq::attr(aria-label)').get(),
                'time' : response.css('div.listItemWithIcon-module_text__18TIF p::text').get(),
                'img' : response.css('picture.PageHeader-picture_w9igg img::attr(src)').get(),
                'Level' : level,               
                'URL' : response.request.url
            }

           
 
    
    