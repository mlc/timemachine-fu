if ActionView::Helpers::AssetTagHelper::JAVASCRIPT_DEFAULT_SOURCES.include?("jquery")
  ActionView::Helpers::AssetTagHelper.register_javascript_include_default("timemachine-jquery")
else
  ActionView::Helpers::AssetTagHelper.register_javascript_include_default("timemachine-prototype")
end
