# installation hook

puts "Installing files..."

FileUtils.cp_r(File.join(File.dirname(__FILE__), "data"),
               File.join(RAILS_ROOT, "public", "timemachine"))

["timemachine-prototype.js", "timemachine-jquery.js"].each do |fn|
  FileUtils.cp_r(File.join(File.dirname(__FILE__), "js", fn),
                 File.join(RAILS_ROOT, "public", "javascripts", fn))
end

puts "Installation complete!"
