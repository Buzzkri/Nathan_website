require 'test_helper'

class Api::PaintingsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_paintings_index_url
    assert_response :success
  end

  test "should get show" do
    get api_paintings_show_url
    assert_response :success
  end

  test "should get create" do
    get api_paintings_create_url
    assert_response :success
  end

  test "should get update" do
    get api_paintings_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_paintings_destroy_url
    assert_response :success
  end

end
