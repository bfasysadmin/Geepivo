guard 'coffeescript', :input => 'coffeescripts', :output => 'public/javascripts'

guard 'shell' do
  watch(/^templates\/(.*)\.html$/) do |matches|
    require 'rubygems'
    require 'json/pure'
    require 'json/add/core'

    file_name = matches[1]
    input_file = "templates/#{file_name}.html"
    output_file = "public/javascripts/templates/#{file_name}.js"

    input_html = nil
    File.open(input_file, "r") do |file|
      input_html = file.read
    end
    
    output = ""
    output << "if (typeof window.templates === 'undefined') { window.templates = {}; }\n"
    output << "window.templates['#{file_name}'] = #{input_html.to_json};"
    
    File.open(output_file, "w") do |file|
      file.write(output)
    end

    puts "#{output_file} generated from #{input_file}"

  end
end
