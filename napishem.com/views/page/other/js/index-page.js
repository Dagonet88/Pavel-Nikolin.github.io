$(document).ready(function(e){$('.form .show_more_lines a').live('click',function(){self=$(this);if(self.hasClass('less')){$('.form .inp_line').each(function(i,item){if(i>service_count_limit){$(item).hide();}
    scrollToElement($('#nl1'));self.html('Что еще можем написать ('+Math.abs(parseInt($('.form .inp_line').length)-(parseInt($('.form .inp_line:visible').length)))+')');});self.removeClass('less');}else{self.addClass('less');self.html('Популярные типы работ ('+Math.abs(parseInt($('.form .inp_line:visible').length)-1)+')');$('.form .inp_line').show();}
    return false;});$('#banner_close').click(function(){$(this).parent().parent().fadeOut('slow');$.post("/ajax/close-banner/",{user_id:user_id});});$('#enter-button').click(function(){var hash={login_email:$("#login").val(),login_password:$("#password").val()};$.post("/ajax/login-remember",hash,function(response){if(response.status=="ERROR"){if(response.error.class_name=='ExUserFullBlocked')
{return alert("Ваш аккаунт заблокирован или удален. Для его восстановления обратитесь к Администрации проекта.");}else{return alert("Пользователь с таким адресом email и паролем не найден");}}
    document.location=response.redirect;},"json");return false;});$('#background').click(function(){$('.pay_type').each(function(index,element){$(this).removeClass("visible");});$('#background').hide();});$('body').click(function(){$('.pay_type').attr('class','pay_type');$('.pops').hide();})
    $('.show_pay_popup').click(function(e){if($(this).parent().hasClass("visible")){$(this).parent().removeClass("visible");return false;}
    else{$('.pay_type').each(function(index,element){$(this).removeClass("visible");});$(this).parent().addClass("visible");return false;}});$('.h_sign').click(function(e){$('#login').val('');$('#password').val('');$('.popup_sign').show();$('#login').focus();return false;});$('.close_popup').click(function(){if($(this).attr('id')!='banner_close'){$(this).closest('.popup').hide();}
        return false;});$('.popup_shadow').click(function(){$(this).parent().hide();return false;});$('#password, #login').keypress(function(e){if(e.which==13){$('#enter-button').trigger('click');}});});