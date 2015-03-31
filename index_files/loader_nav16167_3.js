var navMap = {'<void>':['al_index.php',['index.css','index.js']],'<other>':['al_profile.php',['profile.css','page.css','profile.js','page.js']],'public\\d+($|/)':['al_public.php',['public.css','page.css','public.js','page.js']],'event\\d+($|/)':['al_events.php',['groups.css','page.css','groups.js','page.js']],'club\\d+($|/)':['al_groups.php',['groups.css','page.css','groups.js','page.js']],'publics\\d+($|/)':['al_public.php',['public.css','page.css','public.js','page.js']],'groups(\\d+)?$':['al_groups.php',['groups.css','groups_list.js','indexer.js']],'events$':['al_events.php',['events.css','page.css','events.js','page.js']],'changemail$':['register.php',['reg.css']],'mail($|/)':['al_mail.php',['mail.css','mail.js']],'write\\d*($|/)':['al_mail.php',['mail.css','mail.js']],'im($|/)':['al_im.php',['im.js','im.css','emoji.js','notifier.css']],'audio-?\\d+_\\d+$':['al_audio.php',['audio.css','audio.js']],'audios(-?\\d+)?$':['al_audio.php',['audio.css','audio.js']],'audio($|/)':['al_audio.php',['audio.css','audio.js']],'apps_check($|/)':['al_apps_check.php',['apps.css','apps.js']],'apps($|/)':['al_apps.php',['apps.css','apps.js']],'editapp($|/)':['al_apps_edit.php',['apps.css','apps.js']],'regstep\\d$':['register.php',['reg.js','reg.css','ui_controls.js','ui_controls.css','selects.js']],'video(-?\\d+_\\d+)?$':['al_video.php',['video.js','video.css','videoview.js','videoview.css','indexer.js']],'videos(-?\\d+)?$':['al_video.php',['video.js','video.css','indexer.js']],'feed$':['al_feed.php',['page.css','page.js','feed.css','feed.js']],'friends$':['al_friends.php',['friends.js','friends.css','privacy.css']],'friendsphotos$':['al_photos.php',['friendsphotos.js','photoview.js','friendsphotos.css','photoview.css']],'wall-?\\d+(_\\d+)?$':['al_wall.php',['page.js','page.css','wall.js','wall.css']],'tag\\d+$':['al_photos.php',['photos.js','photoview.js','photos.css','photoview.css']],'albums(-?\\d+)?$':['al_photos.php',['photos.js','photos.css']],'photos(-?\\d+)?$':['al_photos.php',['photos.js','photos.css']],'album-?\\d+_\\d+$':['al_photos.php',['photos.js','photos.css']],'photo-?\\d+_\\d+$':['al_photos.php',['photos.js','photos.css','photoview.js','photoview.css']],'search$':['al_search.php',['search.css','search.js']],'people($|/)':['al_search.php',['search.css','search.js']],'communities$':['al_search.php',['search.css','search.js']],'brands$':['al_search.php',['search.css','search.js']],'invite$':['invite.php',['invite.css','invite.js','ui_controls.css','ui_controls.js']],'join$':['join.php',['join.css','join.js']],'settings$':['al_settings.php',['settings.js','settings.css']],'edit$':['al_profileEdit.php',['profile_edit.js','profile_edit.css']],'blog$':['blog.php',['blog.css']],'fave$':['al_fave.php',['fave.js','fave.css','page.css','wall.css','qsorter.js','indexer.js']],'topic$':['al_board.php',['board.css']],'board\\d+$':['al_board.php',['board.css','board.js']],'topic-?\\d+_\\d+$':['al_board.php',['board.css','board.js']],'stats($|/)':['al_stats.php',['stats.css']],'ru/(.*)?$':['al_pages.php',['pages.css','pages.js','wk.css','wk.js']],'pages($|/)':['al_pages.php',['pages.css','pages.js','wk.css','wk.js']],'page-?\\d+_\\d+$':['al_pages.php',['pages.css','pages.js','wk.css','wk.js']],'restore($|/)':['al_restore.php',['restore.js','restore.css']],'recover($|/)':['recover.php',['recover.js','recover.css']],'gifts\\d*$':['al_gifts.php',['gifts.js','gifts.css']],'docs($|/)':['docs.php',['docs.css','docs.js','indexer.js']],'doc-?\\d+_\\d+$':['docs.php',['docs.css','docs.js','indexer.js']],'docs-?\\d+$':['docs.php',['docs.css','docs.js','indexer.js']],'login($|/)':['al_login.php',['login.css']],'tasks($|/)':['tasks.php',['tasks.css','tasks.js']],'abuse($|/)':['abuse.php',['abuse.css','abuse.js']],'support($|/)':['al_tickets.php',['tickets.css','tickets.js']],'helpdesk($|/)':['al_helpdesk.php',['tickets.css','tickets.js']],'offersdesk($|/)':['offers.php',['offers.css','offers.js']],'payments($|/)':['al_payments.php',['payments.css']],'faq($|/)':['al_faq.php',['faq.css','faq.js']],'tlmd($|/)':['al_talmud.php',['faq.js','faq.css','tickets.css','tickets.js']],'sms_office($|/)':['sms_office.php',['sms_office.css','sms_office.js']],'dev($|/)':['dev.php',['dev.css','dev.js']],'developers($|/)':['al_developers.php',['developers.css']],'help($|/)':['al_help.php',['help.css','help.js']],'claims($|/)':['al_claims.php',['claims.css','claims.js']],'ads$':['ads.php',['ads.css','ads.js']],'adbonus$':['ads.php',['ads.css','ads.js']],'adsbonus$':['ads.php',['ads.css','ads.js']],'adregister$':['ads.php',['ads.css','ads.js']],'adsedit$':['ads_edit.php',['ads.css','ads.js','ads_edit.css','ads_edit.js']],'adscreate$':['ads_edit.php',['ads.css','ads.js','ads_edit.css','ads_edit.js']],'adsmoder$':['ads_moder.php',['ads.css','ads.js','ads_moder.css','ads_moder.js']],'adsweb$':['ads_web.php',['ads.css','ads.js','ads_web.css','ads_web.js']],'exchange$':['ads_posts.php',['ads.css','ads.js','exchange.css','exchange.js']],'exchangemoder$':['ads_posts_moder.php',['ads.css','ads.js','exchange_moder.css','exchange_moder.js']],'offers$':['ads_offers.php',['ads.css','ads.js','ads_offers.css','ads_offers.js']],'offersmoder$':['ads_offers_moder.php',['ads.css','ads.js','ads_offers_moder.css','ads_offers_moder.js']],'test$':['al_help.php',['help.css','help.js']],'agenttest$':['al_help.php',['help.css','help.js']],'grouptest$':['al_help.php',['help.css','help.js']],'dmca$':['al_tickets.php',['tickets.css','tickets.js']],'terms$':['al_help.php',['help.css','help.js']],'privacy$':['al_help.php',['help.css','help.js']],'editdb$':['editdb.php',['editdb.css','editdb.js']],'note\\d+_\\d+$':['al_wall.php',['wall.js','wall.css','wk.js','wk.css','pagination.js']],'notes(\\d+)?$':['al_wall.php',['wall.js','wall.css','wk.js','wk.css','pagination.js']],'bugs($|/)':['bugs.php',['bugs.css','bugs.js']],'wkview.php($)':['wkview.php',['wkview.js','wkview.css','wk.js','wk.css']],'stickers_office($|/)':['stickers_office.php',['stickers_office.css','stickers_office.js']],'charts($|/)':['al_audio.php',['audio.css','audio.js']],'maps($|/)':['maps.php',[]],'jobs$':['al_jobs.php',['jobs.css','jobs.js']],'ui$':['ui.php',[]],'translation$':['al_translation.php',[]],'mobile$':['al_login.php',[]]}; var stVersions = { 'nav': 16167, 'common.js': 1106, 'common.css': 472, 'pads.js': 73, 'pads.css': 74, 'retina.css': 272, 'uncommon.js': 11, 'uncommon.css': 78, 'filebutton.css': 9, 'filebutton.js': 9, 'lite.js': 89, 'lite.css': 35, 'ie6.css': 26, 'ie7.css': 18, 'rtl.css': 163, 'pagination.js': 18, 'blog.css': 7, 'html5audio.js': 5, 'html5video.js': 36, 'html5video.css': 13, 'audioplayer.js': 141, 'audioplayer.css': 16, 'audio_html5.js': 7, 'audio.js': 241, 'audio.css': 126, 'gifts.css': 47, 'gifts.js': 42, 'indexer.js': 19, 'graph.js': 37, 'graph.css': 1, 'boxes.css': 22, 'box.js': 5, 'rate.css': 4, 'tooltips.js': 71, 'tooltips.css': 85, 'sorter.js': 21, 'qsorter.js': 26, 'usorter.js': 2, 'phototag.js': 7, 'phototag.css': 2, 'photoview.js': 362, 'photoview.css': 175, 'fullscreen_pv.js': 2, 'fullscreen_pv.css': 2, 'friendsphotos.js': 13, 'friendsphotos.css': 17, 'friends.js': 206, 'friends.css': 148, 'friends_search.js': 15, 'friends_search.css': 8, 'board.js': 74, 'board.css': 52, 'photos.css': 83, 'photos.js': 75, 'photos_add.css': 17, 'photos_add.js': 42, 'wkpoll.js': 13, 'wkview.js': 130, 'wkview.css': 112, 'single_pv.css': 9, 'single_pv.js': 4, 'video.js': 131, 'video.css': 118, 'videoview.js': 216, 'videoview.css': 129, 'video_edit.js': 17, 'video_edit.css': 17, 'translation.js': 26, 'translation.css': 16, 'reg.css': 26, 'reg.js': 56, 'invite.css': 17, 'invite.js': 13, 'prereg.js': 14, 'index.css': 26, 'index.js': 32, 'join.css': 69, 'join.js': 95, 'intro.css': 21, 'owner_photo.js': 23, 'owner_photo.css': 12, 'page.js': 853, 'page.css': 685, 'about.css': 1, 'page_fixed.css': 24, 'page_help.css': 17, 'public.css': 66, 'public.js': 43, 'events.css': 33, 'events.js': 38, 'pages.css': 48, 'pages.js': 40, 'groups.css': 105, 'groups.js': 34, 'groups_list.js': 58, 'groups_edit.css': 57, 'groups_edit.js': 75, 'profile.css': 214, 'profile.js': 210, 'calendar.css': 7, 'calendar.js': 16, 'wk.css': 38, 'wk.js': 14, 'pay.css': 3, 'pay.js': 6, 'tagger.js': 15, 'tagger.css': 13, 'qsearch.js': 11, 'wall.css': 74, 'wall.js': 75, 'walledit.js': 56, 'thumbs_edit.css': 6, 'thumbs_edit.js': 22, 'mail.css': 80, 'mail.js': 92, 'email.css': 2, 'im.css': 301, 'im.js': 328, 'emoji.js': 103, 'wide_dd.css': 13, 'wide_dd.js': 28, 'writebox.css': 11, 'writebox.js': 46, 'sharebox.js': 17, 'fansbox.js': 29, 'postbox.css': 4, 'postbox.js': 6, 'feed.js': 372, 'feed.css': 222, 'privacy.js': 97, 'privacy.css': 52, 'apps.css': 170, 'apps.js': 248, 'apps_edit.js': 97, 'apps_edit.css': 94, 'apps_check.js': 22, 'apps_check.css': 23, 'settings.js': 94, 'settings.css': 82, 'profile_edit.js': 84, 'profile_edit.css': 36, 'profile_edit_edu.js': 8, 'profile_edit_job.js': 7, 'profile_edit_mil.js': 2, 'search.js': 110, 'search.css': 81, 'datepicker.js': 25, 'datepicker.css': 10, 'oauth_popup.css': 28, 'oauth_page.css': 13, 'oauth_touch.css': 3, 'notes.css': 18, 'notes.js': 30, 'wysiwyg.js': 46, 'wysiwyg.css': 34, 'wiki.css': 10, 'fave.js': 48, 'fave.css': 49, 'widget_comments.css': 88, 'widget_auth.css': 4, 'widget_community.css': 59, 'widget_post.css': 3, 'api/widgets/al_comments.js': 119, 'api/widgets/al_auth.js': 5, 'api/widgets/al_poll.js': 8, 'api/widgets/al_community.js': 57, 'api/widgets/al_like.js': 30, 'api/widgets/al_post.js': 7, 'al_poll.css': 3, 'widget_recommended.css': 3, 'widgets.css': 20, 'common_light.js': 1, 'developers.css': 7, 'touch.css': 7, 'notifier.js': 321, 'notifier.css': 127, 'restore.js': 24, 'restore.css': 12, 'recover.js': 1, 'recover.css': 3, 'docs.js': 62, 'docs.css': 68, 'tags_dd.js': 18, 'tags_dd.css': 17, 'tasks.js': 25, 'tasks.css': 31, 'tickets.js': 153, 'tickets.css': 126, 'faq.js': 14, 'faq.css': 17, 'bugs.js': 23, 'bugs.css': 23, 'login.css': 50, 'upload.js': 88, 'graffiti.js': 26, 'graffiti.css': 22, 'abuse.js': 15, 'abuse.css': 18, 'verify.css': 6, 'stats.css': 25, 'payments.css': 40, 'payments.js': 6, 'offers.css': 17, 'offers.js': 23, 'call.js': 77, 'call.css': 14, 'aes_light.css': 43, 'aes_light.js': 48, 'ads.css': 81, 'ads.js': 61, 'ads_payments.js': 4, 'ads_edit.css': 30, 'ads_edit.js': 109, 'ads_moder.css': 45, 'ads_moder.js': 42, 'ads_tagger.js': 2, 'ads_web.css': 11, 'ads_web.js': 26, 'health.css': 11, 'health.js': 5, 'pinbar.js': 6, 'sms_office.css': 17, 'sms_office.js': 12, 'help.css': 17, 'help.js': 11, 'claims.css': 6, 'claims.js': 4, 'site_stats.css': 10, 'site_stats.js': 8, 'meminfo.css': 12, 'blank.css': 3, 'wk_editor.js': 70, 'wk_editor.css': 28, 'btagger.js': 12, 'btagger.css': 11, 'filters.js': 58, 'filters_pe.js': 2, 'pe.js': 5, 'pe.css': 2, 'dev.js': 56, 'dev.css': 67, 'share.css': 6, 'stickers_office.css': 1, 'stickers_office.js': 1, 'mapbox.js': 1, 'mapbox.css': 1, 'jobs.js': 4, 'jobs.css': 5, 'contests.css': 5, 'ui.css': 1, 'ui.js': 2, 'admin.js': 2, 'admin.css': 2, 'exchange.css': 28, 'exchange.js': 21, 'exchange_moder.css': 1, 'exchange_moder.js': 2, 'ads_offers.css': 15, 'ads_offers.js': 21, 'ads_offers_moder.css': 7, 'ads_offers_moder.js': 7, 'ui_controls.js': 166, 'ui_controls.css': 52, 'selects.js': 25, 'mentions.js': 50, 'apps_flash.js': 65, 'maps.js': 23, 'places.js': 38, 'places.css': 35, 'map2.js': 4, 'map.css': 6, 'sort.js': 8, 'paginated_table.js': 49, 'paginated_table.css': 8, 'q_frame.php': 7, '/swf/api_wrapper.swf': 7, '/swf/api_external.swf': 8, '/swf/api_wrapper2_0.swf': 8, '/swf/queue_transport.swf': 10, '/swf/audio_lite.swf': 13, '/swf/uploader_lite.swf': 12, '/swf/photo_uploader_lite.swf': 14, '/swf/CaptureImg.swf': 12, '/swf/video.swf': 32, '/swf/vkvideochat.swf': 49, '/swf/vchatdevices.swf': 1, 'favicon': 3, 'lang': 3353}; var stTypes = {fromLib:{'md5.js':1,'ui_controls.js':1,'selects.js':1,'sort.js':1,'maps.js':1},fromRoot:{'api/openapi.js':1,'api/share.js':1,'apps_flash.js':1,'mentions.js':1,'map2.js':1,'ui_controls.css':1,'map.css':1,'paginated_table.js':1,'paginated_table.css':1}}; var _rnd = 3759;