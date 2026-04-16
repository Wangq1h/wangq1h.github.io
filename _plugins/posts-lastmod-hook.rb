#!/usr/bin/env ruby
#
# Check for changed posts

require "open3"

module PostLastmodHook
  module_function

  def capture_git(*args)
    stdout, status = Open3.capture2("git", *args)
    return nil unless status.success?

    stdout.strip
  rescue Errno::ENOENT
    nil
  end
end

Jekyll::Hooks.register :posts, :post_init do |post|
  next if ENV["JEKYLL_DISABLE_POST_LASTMOD"] == "1"

  commit_num = PostLastmodHook.capture_git("rev-list", "--count", "HEAD", "--", post.path)
  next unless commit_num

  if commit_num.to_i > 1
    lastmod_date = PostLastmodHook.capture_git(
      "log",
      "-1",
      '--pretty=%ad',
      "--date=iso",
      "--",
      post.path
    )

    post.data["last_modified_at"] = lastmod_date unless lastmod_date.to_s.empty?
  end
end
