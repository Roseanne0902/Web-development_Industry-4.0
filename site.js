// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
    $(function () {
        $("#AI").elastic_grid({
            'showAllText': 'All',
            'filterEffect': 'popup',
            'hoverDirection': true,
            'hoverDelay': 0,
            'hoverInverse': false,
            'expandingSpeed': 500,
            'expandingHeight': 700,
            'items':
                [
                    {
                        'title': 'IBM <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>"IBM’s portfolio of business-ready tools, applications and solutions, designed to reduce the costs and hurdles of AI adoption while optimizing outcomes and responsible use of AI" (IBM).</h4>',
                        'thumbnail': ['/images/sm/IBM_lg.jpg'],
                        'large': ['/images/lg/ibm.jpg'],
                        'button_list':
                            [
                                { 'title': 'Visit Website', 'url': 'https://www.ibm.com/watson/', 'new_window': true },
                            ],
                        'tags': ['IBM']
                    },
                    {
                        'title': 'Microsoft <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>"Microsoft is leading digital transformation with autonomous systems, part of a new class of systems that go beyond basic automation to simplify everyday processes" (Microsoft).</h4>',
                        'thumbnail': ['/images/sm/microsoft_lg.jpg'],
                        'large': ['/images/lg/microsoft.jpg'],
                        'button_list': [{
                            'title': 'Visit Website', 'url': 'https://www.microsoft.com/en-us/ai/default.aspx',
                            'new_window': true
                        },
                        ],
                        'tags': ['Microsoft']
                    },
                    {
                        'title': 'CSIRO <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>"At CSIRO, we solve the greatest challenges through innovative science and technology" (CSIRO).</h4>',
                        'thumbnail': ['/images/sm/csiro_lg.jpg'],
                        'large': ['/images/lg/CSIRO.jpg'],
                        'button_list':
                            [
                                { 'title': 'Visit Website', 'url': 'https://data61.csiro.au/en/Our-Work/AI-and-Machine-Learning', 'new_window': true },
                            ],
                        'tags': ['CSIRO']
                    },
                    {
                        'title': 'AMAZON <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>"AWS pre-trained AI Services provide ready-made intelligence for your applications and workflows.(AMAZON).</h4>',
                        'thumbnail': ['/images/sm/amazon_lg.jpg'],
                        'large': ['/images/lg/amazon.jpg'],
                        'button_list':
                            [
                                { 'title': 'Visit Website', 'url': 'https://aws.amazon.com/machine-learning/ai-lex-polly-rekognition/', 'new_window': true },
                            ],
                        'tags': ['AMAZON']
                    },
                ]
        });
    });
});
$(document).ready(function () {
    $(function () {
        $("#IoT").elastic_grid({
            'showAllText': 'All',
            'filterEffect': 'popup',
            'hoverDirection': true,
            'hoverDelay': 0,
            'hoverInverse': false,
            'expandingSpeed': 500,
            'expandingHeight': 700,
            'items':
                [
                    {
                        'title': 'IBM <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>"By combining IoT data with IBM Cloud® technologies, business can extract valuable insights to improve virtually every aspect of their operations and enable innovative, new business models" (IBM).</h4>',
                        'thumbnail': ['/images/sm/IBM_lg.jpg'],
                        'large': ['/images/lg/ibm.jpg'],
                        'button_list':
                            [
                                { 'title': 'Visit Website', 'url': 'https://www.ibm.com/watson/', 'new_window': true },
                            ],
                        'tags': ['IBM']
                    },
                    {
                        'title': 'Microsoft <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>"The Windows IoT Remote Client application is a part of a remote display and sensor technology available for the Insider build of Windows 10 IoT Core" (Microsoft).</h4>',
                        'thumbnail': ['/images/sm/microsoft_lg.jpg'],
                        'large': ['/images/lg/microsoft.jpg'],
                        'button_list': [{
                            'title': 'Visit Website', 'url': 'https://www.microsoft.com/en-us/ai/default.aspx',
                            'new_window': true
                        },
                        ],
                        'tags': ['Microsoft']
                    },
                    {
                        'title': 'AMAZON <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>"AWS IoT lets you securely connect and manage devices, collect and analyze device data, and build and deploy solutions that drive greater business value" (Amazon).</h4>',
                        'thumbnail': ['/images/sm/amazon_lg.jpg'],
                        'large': ['/images/lg/amazon.jpg'],
                        'button_list':
                            [
                                { 'title': 'Visit Website', 'url': 'https://aws.amazon.com/machine-learning/ai-lex-polly-rekognition/', 'new_window': true },
                            ],
                        'tags': ['AMAZON']
                    },
                    {
                        'title': 'CIO <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>"The federal government has hatched two new research projects - investigating artificial intelligence (AI) and the internet of things (IoT) technologies" (CIO).</h4>',
                        'thumbnail': ['/images/sm/CIO.jpg'],
                        'large': ['/images/lg/IOT CIO.jpg'],
                        'button_list':
                            [
                                { 'title': 'Visit Website', 'url': 'https://www.cio.com.au/article/641518/feds-launch-ai-iot-projects/', 'new_window': true },
                            ],
                        'tags': ['CIO']
                    },

                ]
        });
    });
});
$(document).ready(function () {
    $(function () {
        $("#Cognitive").elastic_grid({
            'showAllText': 'All',
            'filterEffect': 'popup',
            'hoverDirection': true,
            'hoverDelay': 0,
            'hoverInverse': false,
            'expandingSpeed': 500,
            'expandingHeight': 700,
            'items':
                [
                    {
                        'title': 'IBM <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>"This smart paper discusses how businesses can take advantage of cognitive technology" (IBM)</h4>',
                        'thumbnail': ['/images/sm/IBM_lg.jpg'],
                        'large': ['/images/lg/ibm.jpg'],
                        'button_list':
                            [
                                { 'title': 'Visit Website', 'url': 'https://www.ibm.com/watson/', 'new_window': true },
                            ],
                        'tags': ['IBM']
                    },
                    {
                        'title': 'Microsoft <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>"The Microsoft Cognitive Toolkit (CNTK) is an open-source toolkit for commercial-grade distributed deep learning" (Microsoft).</h4>',
                        'thumbnail': ['/images/sm/microsoft_lg.jpg'],
                        'large': ['/images/lg/microsoft.jpg'],
                        'button_list': [{
                            'title': 'Visit Website', 'url': 'https://www.microsoft.com/en-us/ai/default.aspx',
                            'new_window': true
                        },
                        ],
                        'tags': ['Microsoft']
                    },
                    {
                        'title': 'Google <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>"Innovative machine learning products and services on a trusted platform" (Google).</h4>',
                        'thumbnail': ['/images/sm/google_lg.jpg'],
                        'large': ['/images/lg/google.jpg'],
                        'button_list':
                            [
                                { 'title': 'Visit Website', 'url': 'https://cloud.google.com/vision/', 'new_window': true },
                            ],
                        'tags': ['Google']
                    },
                    {
                        'title': 'Forbes <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>"Artificial intelligence has been a far-flung goal of computing since the conception of the computer, but we may be getting closer than ever with new cognitive computing models" (Forbes).</h4>',
                        'thumbnail': ['/images/sm/forbes.png'],
                        'large': ['/images/lg/forbes.png'],
                        'button_list': [{
                            'title': 'Visit Website', 'url': 'https://www.forbes.com/sites/bernardmarr/2016/03/23/what-everyone-should-know-about-cognitive-computing/#62c3c5885088',
                            'new_window': true
                        },
                        ],
                        'tags': ['Forbes']
                    },
                ]
        });
    });
});
$(document).ready(function () {
    $(function () {
        $("#Cloud").elastic_grid({
            'showAllText': 'All',
            'filterEffect': 'popup',
            'hoverDirection': true,
            'hoverDelay': 0,
            'hoverInverse': false,
            'expandingSpeed': 500,
            'expandingHeight': 700,
            'items':
                [
                    {
                        'title': 'Google <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>"Meet your business challenges head on with cloud computing services from Google, including data management, hybrid & multi-cloud, and AI & ML" (Google).</h4>',
                        'thumbnail': ['/images/sm/google_lg.jpg'],
                        'large': ['/images/lg/google.jpg'],
                        'button_list':
                            [
                                { 'title': 'Visit Website', 'url': 'https://cloud.google.com/vision/', 'new_window': true },
                            ],
                        'tags': ['Google']
                    },
                    {
                        'title': 'Microsoft <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>"Cloud Drive, Manage your Cloud accounts easily and faster. Cloud Drive! supports multiple services like Dropbox, Onedrive, Google Drive, and Box" (Microsoft).</h4>',
                        'thumbnail': ['/images/sm/microsoft_lg.jpg'],
                        'large': ['/images/lg/microsoft.jpg'],
                        'button_list': [{
                            'title': 'Visit Website', 'url': 'https://www.microsoft.com/en-us/ai/default.aspx',
                            'new_window': true
                        },
                        ],
                        'tags': ['Microsoft']
                    },
                    {
                        'title': 'IBM <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>"IBM Cloud.Hybrid.Open.Resilient.Your platform and partner for digital transformation" (IBM).</h4>',
                        'thumbnail': ['/images/sm/IBM_lg.jpg'],
                        'large': ['/images/lg/ibm.jpg'],
                        'button_list':
                            [
                                { 'title': 'Visit Website', 'url': 'https://www.ibm.com/watson/', 'new_window': true },
                            ],
                        'tags': ['IBM']
                    },
                    {
                        'title': 'AMAZON <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>"Cloud computing is the on-demand delivery of IT resources over the Internet with pay-as-you-go pricing." (Amazon).</h4>',
                        'thumbnail': ['/images/sm/amazon_lg.jpg'],
                        'large': ['/images/lg/amazon.jpg'],
                        'button_list':
                            [
                                { 'title': 'Visit Website', 'url': 'https://aws.amazon.com/machine-learning/ai-lex-polly-rekognition/', 'new_window': true },
                            ],
                        'tags': ['AMAZON']
                    },
                ]
        });
    });
});
$(document).ready(function () {
    $(function () {
        $("#Robotics").elastic_grid({
            'showAllText': 'All',
            'filterEffect': 'popup',
            'hoverDirection': true,
            'hoverDelay': 0,
            'hoverInverse': false,
            'expandingSpeed': 500,
            'expandingHeight': 700,
            'items':
                [
                    {
                        'title': 'Forbes <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>"I interviewed Yvette Cameron, Oracle Cloud HCM senior vice-president, to learn more about how technology, artificial intelligence and robots can help workers with their mental health matters and careers" (Forbes).</h4>',
                        'thumbnail': ['/images/sm/forbes.png'],
                        'large': ['/images/lg/forbes.png'],
                        'button_list': [{
                            'title': 'Visit Website', 'url': 'https://www.forbes.com/sites/bernardmarr/2016/03/23/what-everyone-should-know-about-cognitive-computing/#62c3c5885088',
                            'new_window': true
                        },
                        ],
                        'tags': ['Forbes']
                    },
                    {
                        'title': 'ZDNet <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>"It seems like theres more talk these days about Industry 4.0 --or the fourth industrial revolution -- and robotics, along with other technologies that will play a role in this megatrend" (ZDNet).</h4>',
                        'thumbnail': ['/images/sm/zdn.jpg'],
                        'large': ['/images/lg/zdn.jpg'],
                        'button_list': [{
                            'title': 'Visit Website', 'url': 'https://www.zdnet.com/article/robotics-and-industry-4-0/',
                            'new_window': true
                        },
                        ],
                        'tags': ['ZDNet']
                    },
                    {
                        'title': 'i-SCOOP <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>"Robots and cobots in logistics – the next stage of growth" (i-SCOOP).</h4>',
                        'thumbnail': ['/images/sm/isc.jpg'],
                        'large': ['/images/lg/isc.jpg'],
                        'button_list': [{
                            'title': 'Visit Website', 'url': 'https://www.i-scoop.eu/robots-cobots-logistics-4-0/',
                            'new_window': true
                        },
                        ],
                        'tags': ['i-SCOOP']
                    },
                    {
                        'title': 'Automation World <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>"Soft Robotics Moves into AI Industrial robots gain human- like hand - eye coordination" (Automation World).</h4>',
                        'thumbnail': ['/images/sm/autowrl.png'],
                        'large': ['/images/lg/autowrl.png'],
                        'button_list': [{
                            'title': 'Visit Website', 'url': 'https://www.automationworld.com/industry-40-here-are-you-ready',
                            'new_window': true
                        },
                        ],
                        'tags': ['AutomationWorld']
                    },
                ]
        });
    });
});
$(document).ready(function () {
    $(function () {
        $("#Blockchain").elastic_grid({
            'showAllText': 'All',
            'filterEffect': 'popup',
            'hoverDirection': true,
            'hoverDelay': 0,
            'hoverInverse': false,
            'expandingSpeed': 500,
            'expandingHeight': 700,
            'items':
                [
                    {
                        'title': 'Blockchain <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>"The world’s most popular way to buy, sell, and trade crypto. Trusted by millions since 2011 with over $1 Trillion in crypto transactions" (Blockchain).</h4>',
                        'thumbnail': ['/images/sm/bc.jpg'],
                        'large': ['/images/lg/bc.jpg'],
                        'button_list': [{
                            'title': 'Visit Website', 'url': 'https://www.blockchain.com/',
                            'new_window': true
                        },
                        ],
                        'tags': ['Blockchain']
                    },
                    {
                        'title': 'PC Magazine <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>"Blockchain: The Invisible Technology Thats Changing the World" (PC Magazine).</h4>',
                        'thumbnail': ['/images/sm/PC.jpg'],
                        'large': ['/images/lg/PC.jpg'],
                        'button_list': [{
                            'title': 'Visit Website', 'url': 'https://au.pcmag.com/amazon-web-services/46389/feature/blockchain-the-invisible-technology-thats-changing-the-world',
                            'new_window': true
                        },
                        ],
                        'tags': ['PC Magazine']
                    },
                    {
                        'title': 'Forbes <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>"Blockchain Developer Alchemy Raises $250 Million Series C At $3.5 Billion Valuation" (Forbes).</h4>',
                        'thumbnail': ['/images/sm/forbes.png'],
                        'large': ['/images/lg/forbes.png'],
                        'button_list': [{
                            'title': 'Visit Website', 'url': 'https://www.forbes.com/sites/bernardmarr/2016/03/23/what-everyone-should-know-about-cognitive-computing/#62c3c5885088',
                            'new_window': true
                        },
                        ],
                        'tags': ['Forbes']
                    },
                    {
                        'title': 'CSIRO <hr/> <a class="btn btn-primary">More Details</a>',
                        'description': '<h4>"Blockchain is useful for a lot more than just Bitcoin – CSIROscope" (CSIRO).</h4>',
                        'thumbnail': ['/images/sm/csiro_lg.jpg'],
                        'large': ['/images/lg/CSIRO.jpg'],
                        'button_list':
                            [
                                { 'title': 'Visit Website', 'url': 'https://data61.csiro.au/en/Our-Work/AI-and-Machine-Learning', 'new_window': true },
                            ],
                        'tags': ['CSIRO']
                    },
                ]
        });
    });
});