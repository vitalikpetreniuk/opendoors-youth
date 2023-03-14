<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package youth
 */

get_header();
global $post; ?>
<!-- HTML -->
<div class="odContent">
    <div class="about-section">
        <div class="odEvent">
            <div class="content text-center">
                <div class="title">ABOUT US</div>
                <div class="description">
                    <p>Millions of people worldwide are persecuted for following Jesus. Working with Christians on the frontline, Open Doors is committed to smuggling hope, providing Bibles, training, literacy and livelihood programmes and advocacy support for people who know the true cost of their faith.</p>
                </div>
            </div>
            <div class="video">
                <div class="video-container">
                    <iframe
                            src="https://www.youtube.com/embed/qxTux0DkANQ" loading="lazy"
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope;"
                            allowfullscreen></iframe>
                </div>
            </div>
            <div class="pattern long"><img src="https://youth.dev-od.uk/wp-content/themes/youth/img/particles2.svg" alt="pattern"></div>
        </div>
        <div class="history-section">
            <div class="title text-center">Since 1955: A little history Lesson</div>
            <ul class="history-list">
                <li><span class="history-year">1955</span> Brother Andrew smuggles Bibles into Eastern Europe for the first time</li>
                <li><span class="history-year">1956</span> He makes the first of many trips in his legendary VW Beetle. Countless stories of God making seeing eyes ‘blind’.</li>
                <li><span class="history-year">1967</span> Brother Andrew’s biography, God’s Smuggler, is released and goes on to become one of the best selling Christian books of all time.</li>
                <li><span class="history-year">1970</span> Open Doors UK is founded as Open Doors grows internationally. At the height of the Cold War it was a great opportunity to share the needs of the persecuted church.</li>
                <li><span class="history-year">1978</span> Contact with churches in the Middle East begins.</li>
                <li><span class="history-year">1981</span> Project Pearl- one million Bibles are delivered to a beach in China overnight! Years on amazing stories are told of how Project Pearl Bibles end up in far flung places, even as far as India!</li>
                <li><span class="history-year">1982</span> A seven-year prayer campaign for the Communist Bloc begins. It ends with the fall of the Berlin Wall in 1989! The church on its knees in prayer. And God on the move.</li>
                <li><span class="history-year">1989</span> Open Doors delivers one million New Testaments to Russia.</li>
                <li><span class="history-year">1992</span> Project Samuel: One million children in the former Soviet Union get their very first Bibles, many in remote areas.</li>
                <li><span class="history-year">1994</span> The first Chinese Children’s Bible in simplified Chinese is delivered.</li>
                <li><span class="history-year">1997</span> The World Evangelical Fellowship presents Brother Andrew with the International Religious Liberty Award.</li>
                <li><span class="history-year">1998</span> Open Doors launch the first of many relief projects, in war-torn Southern Sudan ‘Operation Daily Bread’.</li>
                <li><span class="history-year">1999</span> Open Doors delivers over two million Bibles and Christian study materials to Chinese believers.</li>
                <li><span class="history-year">2001</span> Open Doors Youth is born! Wahey! Passionate about telling the story of the persecuted to a new generation.</li>
                <li><span class="history-year">2003</span> Heart for Iraq is launched, bringing encouragement and aid to the church in Iraq.</li>
                <li><span class="history-year">2005</span> Open Doors celebrates 50 years, and a prayer chain for North Korea begins.</li>
                <li><span class="history-year">2010</span> The Right to Believe campaign sees around 150,000 UK Christians (over 428,000 worldwide) sign up and show their support for persecuted Christians.</li>
                <li><span class="history-year">2013</span> The Save Syria campaign sees Open Doors supporters help to provide monthly relief to 9,000 families, 328,000 people have sign the petition and 60,000 bibles and Christian books are distributed!</li>
                <li class="long"><span class="history-year">2015 <small>and beyond</small></span> Our aim is to make sure that we in the west stand alongside Christians who face persecution simply for following Jesus. This isn’t about us helping them. We’re family and those who risk it all for the faith have massive things to teach us about how we view our journey with Jesus. The church is God’s chosen plan to show his love and light to the world and God wants his church across the world to be united and committed to him, standing and working together to see that mission fulfilled.</li>
            </ul>
            <div class="history-text">
                <div class="title text-center">Up for coming with us on the journey?</div>
                <a href="#" class="btn">DO SOMETHING</a>
            </div>
        </div>
    </div>
</div>
<?php get_footer();
