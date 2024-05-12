import scrapy
import re
from scrapy_playwright.page import PageMethod

CourseId = 0
class PwspiderSpider(scrapy.Spider):
    name = "pwspider2"
    allowed_domains = ['coursera.org']
    start_urls = ['https://www.coursera.org/certificates/computer-science-it']
    count = 0
    def parse(self, response):
        for href in response.css('div.rc-ExpandedCertificatesContainer a::attr(href)'):
            yield response.follow(href.extract(), callback=self.parse_categories)
    
    def parse_categories(self, response):
        title = response.css('div.css-1psltl0 h1::text').extract_first()
        category_dict = {
            "Cloud" : "Cloud",
            "cloud" : "Cloud",
            "azure" : "Cloud",
            "Azure" : "Cloud",
            "AWS"   : "Cloud",
            "Consult" : "Consultancy",
            "Secur" : "Security",
            "secur" : "Security",
            "UX" : "User Experience",
            "Manage" : "Management",
            "manage" : "Management"

        }
        if title != None:
            self.count += 1
            category = ""
            for key in category_dict:
                if (key in title):
                    category = key
            if category != "":
                yield{
                    'id' : self.count,
                    'title' : response.css('div.css-1psltl0 h1::text').get(),
                    'stars' : response.css('div.css-guxf6x div::text').get(),
                    'img' : response.css('div.css-1jcosae img::attr(src)').get(),
                    'URL': response.url,
                    'category' : category_dict[]
                }
            else:
                yield{
                    'id' : self.count,
                    'title' : response.css('div.css-1psltl0 h1::text').get(),
                    'stars' : response.css('div.css-guxf6x div::text').get(),
                    'img' : response.css('div.css-1jcosae img::attr(src)').get(),
                    'URL': response.url,
                }
                
        
    

 
    
    